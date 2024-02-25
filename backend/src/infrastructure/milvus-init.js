import { MilvusClient, DataType, MetricType, ConsistencyLevelEnum } from "@zilliz/milvus2-sdk-node";

const address = process.env.MILVUS_ADDRESS;
const token = process.env.MILVUS_TOKEN;
const ssl = false;
const milvusClient = new MilvusClient({ address, ssl, token });

export { milvusClient };