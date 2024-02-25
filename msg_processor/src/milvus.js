const {
    MilvusClient,
    MetricType,
    ConsistencyLevelEnum
} = require("@zilliz/milvus2-sdk-node");

const address = process.env.MILVUS_ADDRESS;
const token = process.env.MILVUS_TOKEN;
const ssl = false;
const milvusClient = new MilvusClient({ address, ssl, token });

exports.searchDoctor = async function (vector) {
    const colName = "doctors";
    await milvusClient.loadCollection({
        collection_name: colName,
    });

    const searchParams = {
        params: { nprobe: 1024 }
    };

    const response = await milvusClient.search({
        collection_name: colName,
        vector,
        limit: 1,
        metric_type: MetricType.L2,
        param: searchParams,
        consistency_level: ConsistencyLevelEnum.Strong,
        output_fields: ["Auto_id", "name"]
    });
    if (response.status.error_code !== "Success") {
        return null;
    }
    const data = response.results[0];
    if (data.score > 0.50) {
        return null;
    }

    return data;
}
