export default function buildMakeDoctor() {
	return function makeDoctor({
		name,
		address,
		speciality,
		avatar,
		Auto_id
	}) {
		if (!name || !address || !speciality || !avatar || !Auto_id) {
			throw new Error("Missing fields for doctor");
		}

		return Object.freeze({
			getName: () => name,
			getAddress: () => address,
			getSpeciality: () => speciality,
			getAvatar: () => avatar,
			getAutoId: () => Auto_id
		});
	}
}