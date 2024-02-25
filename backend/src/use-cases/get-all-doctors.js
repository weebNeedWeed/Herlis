export default function makeGetAllDoctors({ doctorDb }) {
	return async function getAllDoctors() {
		const doctors = await doctorDb.findAll();
		return doctors;
	}
}