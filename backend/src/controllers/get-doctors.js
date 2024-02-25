export default function makeGetDoctors({ getAllDoctors }) {
	return async function getDoctors(httpRequest) {
		const doctors = await getAllDoctors();
		return {
			headers: {
				"Content-Type": "application/json"
			},
			statusCode: 200,
			body: doctors
		}
	}
}