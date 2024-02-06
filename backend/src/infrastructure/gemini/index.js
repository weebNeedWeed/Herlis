import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import {DEFAULT_HISTORY} from "./default-history";

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const generationConfig = {
    temperature: 1,
    topK: 3,
    topP: 1,
    maxOutputTokens: 2048,
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

export default async function getGeminiResponse(inputText, conversation) {
    const convHistory = conversation.getMessages().map(x => ({
        role: x.getSender(),
        parts: [{text: x.getContent()}]
    }));
    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: DEFAULT_HISTORY.concat(convHistory),
    });

    const result = await chat.sendMessage(inputText);
    return result.response;
}
