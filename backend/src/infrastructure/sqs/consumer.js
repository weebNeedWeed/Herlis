import { Consumer } from 'sqs-consumer';
import getGeminiResponse from '../gemini';
import { sendMessage } from '../../express/server-sent-events';

const handleMessage = async (message) => {
	const body = JSON.parse(message.Body);
	const prompt = `Với các thông tin sau, hãy viết một đoạn giới thiệu ngắn gọn về bác sĩ kèm địa chỉ và chuyên môn cho tôi (tôi bị ${body.symptoms}):
Chuyên môn: ${body.doctor.speciality}
Tên bác sĩ: ${body.doctor.name}
Địa chỉ: ${body.doctor.address}`;

	const response = await getGeminiResponse(prompt, {
		getMessages: () => []
	});

	const text = response.text();
	sendMessage(body.conversationId, encodeURI(text));
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