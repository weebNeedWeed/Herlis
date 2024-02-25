import BaseService from "./BaseService";

class DoctorsService extends BaseService {
	constructor() {
		super();
	}
	getAll() {
		return this.axiosInstance.get("/doctors",);
	}

	getById(id) {
		return this.axiosInstance.get("/doctors/" + id);
	}
}

const doctorsService = new DoctorsService();
export default doctorsService;