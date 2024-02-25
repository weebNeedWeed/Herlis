import { Consumer } from 'sqs-consumer';
import getGeminiResponse from '../gemini';
import { sendMessage } from '../../express/server-sent-events';
import { db } from "./../firebase-init";
import { makeMessage } from '../../entities';
import { FieldValue } from 'firebase-admin/firestore';

const handleMessage = async (message) => {
	const body = JSON.parse(message.Body);
	const msg = `Và tớ cũng dự đoán rằng có thể cậu bị **${body.symptoms}**. Nên tớ đề xuất cho cậu một số chuyên gia, bác sĩ tâm lý để cậu có thể tìm kiếm lời khuyên, giải pháp tốt hơn:\n\n
**${body.doctor.name}** *([Xem thông tin bác sĩ](/doctors/${body.doctor.Auto_id}))*`;

	await db.runTransaction(async t => {
		const ref = db.collection("conversations").doc(body.conversationId);
		const doc = await t.get(ref);
		if (!doc.exists) {
			return;
		}

		const msgObj = makeMessage({
			sender: "model",
			content: msg,
			visible: false
		});

		await t.update(ref, {
			messages: FieldValue.arrayUnion({
				content: msgObj.getContent(),
				sender: msgObj.getSender(),
				createdAt: msgObj.getCreatedAt().getTime(),
				visible: msgObj.getVisible()
			})
		});

		sendMessage(body.conversationId, encodeURI(msg));
	});

}

const consumer = Consumer.create({
	region: "ap-southeast-1",
	queueUrl: process.env.RESPONSE_QUEUE_URL,
	handleMessage,
});

consumer.on('error', (err) => {
	console.error(err.message);
});

consumer.on('processing_error', (err) => {
	console.error(err.message);
});

export default consumer;
