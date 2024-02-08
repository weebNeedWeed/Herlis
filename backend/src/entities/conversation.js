import {makeMessage} from "./";

export default function buildMakeConversation({Id}) {
    return function makeConversation({
        createdAt = Date.now(),
        userId,
        id = Id.createId(),
        title = "",
        messages = [],
    }) {
        if(!userId) {
            throw new Error("Invalid userId");
        }

        if(!Id.isValidId(id)) {
            throw new Error("Invalid conversationId");
        }

        const _messages = [];
        if(messages.length !== 0) {
            messages.forEach(m => addMessage(m))
        }
        return Object.freeze({
            getId: () => id,
            getTitle: () => title,
            getUserId: () => userId,
            getCreatedAt: () => createdAt,
            getMessages: () => [..._messages],
            addMessage
        });

        function addMessage({sender, content, id, createdAt}) {
            const message = makeMessage({sender, content, id,  createdAt});
            _messages.push(message);
        }
    }
}
