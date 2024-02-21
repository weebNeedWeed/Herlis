const clients = new Map();

function eventsHandler(request, response) {
	const uid = request.query.uid;
	if (!uid) {
		return;
	}

	const headers = {
		'Content-Type': 'text/event-stream',
		'Connection': 'keep-alive',
		'Cache-Control': 'no-cache'
	};
	response.writeHead(200, headers);

	clients.set(uid, response);

	request.on('close', () => {
		clients.delete(uid);
	});
}

function sendMessage(id, message) {
	const res = clients.get(id);
	if (!res) {
		return;
	}
	res.write(`data: ${message}\n\n`);
}

export { eventsHandler, sendMessage };