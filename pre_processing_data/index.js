import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { MilvusClient } from "@zilliz/milvus2-sdk-node";
import { DataType } from "@zilliz/milvus2-sdk-node";
import { MetricType, ConsistencyLevelEnum } from "@zilliz/milvus2-sdk-node";
const address = "https://in03-6a4fa4c93e919a8.api.gcp-us-west1.zillizcloud.com";
const token = "7b87061d7d777d4a8e8eaff15631781945fc875a8ed80d9ca3748d2a4ef997d99905d38f9227c9654dc990693a1bce23d1dbc4d6";
const ssl = false;
const milvusClient = new MilvusClient({ address, ssl, token });

const genAI = new GoogleGenerativeAI("AIzaSyDTQqemynGbf8z0sgsjhUWZG7MPRvtadZk");
const model = genAI.getGenerativeModel({ model: "embedding-001"});

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

(async () => {
    const processed = [];
    for(let d of data) {
        const result = await model.embedContent(d.speciality);
        const embedding = result.embedding;    
        processed.push({
            ...d,
            speciality_vector: embedding.values
        });
    }

    const mr = await milvusClient.insert({
        collection_name: "doctors",
        fields_data: processed,
    });
    console.log(mr);
})();
