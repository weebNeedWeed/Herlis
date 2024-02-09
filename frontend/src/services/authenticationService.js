import BaseService from "./BaseService";

class AuthenticationService extends BaseService {
	constructor() {
		super();
	}
	storeUserInformation(token, userInformation) {
		super.withToken(token);
		return this.axiosInstance.post("/user", userInformation);
	}
}

const authenticationService = new AuthenticationService();
export default authenticationService;