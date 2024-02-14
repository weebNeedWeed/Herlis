import BaseService from "./BaseService";

class ConversationsService extends BaseService {
	constructor() {
		super();
	}
	getAll(token, { cursor, pageSize = 5 }) {
		super.withToken(token);
		const params = new URLSearchParams({
			cursor,
			pageSize
		});
		return this.axiosInstance.get("/conversations?" + params.toString());
	}
	create(token, { firstMessage }) {
		super.withToken(token);
		return this.axiosInstance.post("/conversations", { firstMessage }, {
			timeout: 0
		});
	}
	getById(token, { id }) {
		super.withToken(token);
		return this.axiosInstance.get(`/conversations/${id}`);
	}
	addMessage(token, { content, id }) {
		super.withToken(token);
		return this.axiosInstance.post(`/conversations/${id}/messages`, { content }, {
			timeout: 0
		});
	}
}

const conversationsService = new ConversationsService();
export default conversationsService;