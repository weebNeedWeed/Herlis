import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
const client = new SQSClient({ region: "ap-southeast-1" });
const queueUrl = process.env.REQUEST_QUEUE_URL;

export const publishMessage = async function (message) {
	const input = {
		QueueUrl: queueUrl,
		MessageBody: message,
	};
	const command = new SendMessageCommand(input);
	return await client.send(command);
}