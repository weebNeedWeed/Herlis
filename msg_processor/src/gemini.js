const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const embedModel = genAI.getGenerativeModel({ model: "embedding-001" });
const extractModel = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

exports.getEmbedding = async function (text) {
    const result = await embedModel.embedContent(text);
    const embedding = result.embedding;
    return embedding.values;
}

exports.extractSymptoms = async function (text) {
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 150,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
    ];

    const parts = [
        {
            text: `Dự đoán các bệnh tâm lý có trong đoạn tin nhắn sau, liệt kê bệnh ngăn cách bởi dấu phẩy, nếu không đủ thông tin vui lòng trả lời \"0\":\n${text}`
        },
    ];

    const result = await extractModel.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });

    const response = result.response;
    const t = response.text();
    return t !== "0" ? t : null;
}
