const { getEmbedding, extractSymptoms } = require("./src/gemini");
const { searchDoctor } = require("./src/milvus");
const { sendMessage } = require("./src/sqs");

exports.handler = async function (event, context) {
    for (const message of event.Records) {
        await processMessage(message);
    }
}

async function processMessage(message) {
    try {
        const body = JSON.parse(message.body);
        const { conversationId, userId, content } = body;
        console.log("payload: " + message.body);
        if (!conversationId || !userId || !content) {
            console.log("Missing body");
            return;
        }

        const symptoms = await extractSymptoms(content);
        console.log(`symptoms: ${symptoms}`);
        if (!symptoms) {
            console.log("No symptoms");
            return;
        }
        const vectorizedSimptoms = await getEmbedding(symptoms);

        const doctor = await searchDoctor(vectorizedSimptoms);
        console.log(`doctor: ${JSON.stringify(doctor)}`);
        if (!doctor) {
            console.log("No doctor");
            return;
        }

        await sendMessage({
            symptoms,
            doctor,
            userId,
            conversationId,
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}
