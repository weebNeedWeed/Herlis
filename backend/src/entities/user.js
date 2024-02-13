export default function buildMakeUser({IsoDate}) {
    return function makeUser({
        fullName,
        gender,
        phoneNumber = "",
        dateOfBirth,
        conversationIds = [],
        uid,
    }) {
        const allowedGenders = ["male", "female", "other"];

        if(!uid) {
            throw new Error("Missing uid");
        }

        if(!fullName.trim()) {
            throw new Error("FullName is empty");
        }

        if(!gender || !allowedGenders.includes(gender)) {
            throw new Error("Gender must be one of those: female, male and other");
        }

        dateOfBirth = new Date(dateOfBirth);
        if(!IsoDate.isValid(dateOfBirth)){
            throw new Error("Invalid date of birth");
        }

        // TODO: Validate phoneNumber later
        if(phoneNumber) {
        }

        return Object.freeze({
            getUid: () => uid,
            getFullName: () => fullName,
            getGender: () => gender,
            getPhoneNumber: () => phoneNumber,
            getDateOfBirth: () => dateOfBirth,
            getConversationIds: () => [...conversationIds],
            addConversationId
        });

        function addConversationId(id) {
            conversationIds.push(id);
        }
    }
}
