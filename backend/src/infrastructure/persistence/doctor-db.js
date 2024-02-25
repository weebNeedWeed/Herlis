export default function makeDoctorDb({ milvusClient }) {
	const collectionName = "doctors";

	return Object.freeze({
		findAll,
		findByAutoId
	});

	async function findAll() {
		const results = await milvusClient.query({
			collection_name: collectionName,
			expr: "Auto_id >= 0",
			output_fields: ["Auto_id", "name", "avatar"],
		});

		return results.data;
	}

	async function findByAutoId(Auto_id) {
		const results = await milvusClient.query({
			collection_name: collectionName,
			expr: `Auto_id in [${Auto_id}]`,
			output_fields: ["Auto_id", "name", "avatar", "address", "speciality", "description"],
		});

		if (!results.data || results.data.length === 0) {
			return null;
		}

		return results.data[0];
	}
}
