const AWS = require("aws-sdk");
const sqs = new AWS.SQS({ 
    apiVersion: "2012-11-05",
    region: "ap-southeast-1" 
});

const queueUrl = process.env.RESPONSE_QUEUE_URL;

exports.sendMessage = function(obj) {
    const params = {
        MessageBody: JSON.stringify(obj),
        QueueUrl: queueUrl,
    };
    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            throw new Error(err.message);
        } 
    });
}
