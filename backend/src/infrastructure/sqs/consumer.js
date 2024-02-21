import { Consumer } from 'sqs-consumer';
import getGeminiResponse from '../gemini';
import { sendMessage } from '../../express/server-sent-events';

const handleMessage = async (message) => {
	const body = JSON.parse(message.Body);
	const prompt = `Với các thông tin sau, hãy viết một đoạn giới thiệu ngắn gọn về bác sĩ kèm địa chỉ và chuyên môn cho tớ (tớ bị ${body.symptoms}):
Chuyên môn: ${body.doctor.speciality}
Tên bác sĩ: ${body.doctor.name}
Địa chỉ: ${body.doctor.address}`;

	const response = await getGeminiResponse(prompt, {
		getMessages: () => []
	});

	const text = response.text();
    const msg = `Và tớ cũng dự đoán rằng có thể cậu bị **${body.symptoms}**. Nên tớ đề xuất cho cậu một số chuyên gia, bác sĩ tâm lý để cậu có thể tìm kiếm lời khuyên, giải pháp tốt hơn:\n
${text}`;
	sendMessage(body.conversationId, encodeURI(msg));
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
