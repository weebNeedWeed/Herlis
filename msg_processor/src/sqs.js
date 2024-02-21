const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
const client = new SQSClient({
    region: "ap-southeast-1"
});

const queueUrl = process.env.RESPONSE_QUEUE_URL;

exports.sendMessage = async function (obj) {
    const params = {
        MessageBody: JSON.stringify(obj),
        QueueUrl: queueUrl,
    };
    const command = new SendMessageCommand(params);
    await client.send(command);
}
