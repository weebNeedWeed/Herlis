import BaseService from "./BaseService";

class AuthenticationService extends BaseService {
	storeUserInformation(token, userInformation) {
		this.withToken(token);
		return this.axiosInstance.post("/user", userInformation);
	}
}

const authenticationService = new AuthenticationService();
export default authenticationService;