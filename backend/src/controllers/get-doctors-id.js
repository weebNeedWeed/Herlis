export default function makeGetDoctorsId({ doctorDb }) {
	return async function getDoctorsId(httpRequest) {
		const { Auto_id } = httpRequest.params;
		const doctor = await doctorDb.findByAutoId(Auto_id);
		const headers = {
			"Content-Type": "application/json"
		}
		if (doctor === null) {
			return {
				headers,
				statusCode: 400,
				body: {
					error: "No doctor with given Id"
				}
			}
		}

		return {
			headers,
			statusCode: 200,
			body: doctor
		}
	}
}