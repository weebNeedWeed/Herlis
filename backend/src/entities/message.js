export default function buildMakeMessage({Id}) {
    return function makeMessage({
        sender,
        content, 
        createdAt = Date.now(), 
        id = Id.createId() 
    }) {
        if(!Id.isValidId(id)) {
            throw new Error("Invalid id");
        }

        if(!sender 
            || (sender.localeCompare("model") !== 0 && sender.localeCompare("user") !== 0)) {
            throw new Error("Sender must be 'bot' or 'user'");
        }

        if(!content.trim()) {
            throw new Error("Invalid content");
        }

        return Object.freeze({
            getId: () => id,
            getSender: () => sender,
            getContent: () => content,
            getCreatedAt: () => createdAt
        });
    }

}
