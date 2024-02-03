export default function buildMakeUser() {
    return function makeUser({
        fullName,
        gender,
        phoneNumber,
        dateOfBirth,
        updatedAt = Date.now(),
        uid,
    }) {
        if(!uid) {
            throw new Error("Missing uid");
        }

        if(!fullName.trim()) {
            throw new Error("FullName is empty");
        }

        if(!gender) {
            throw new Error("Invalid gender");
        }

        if(!dateOfBirth) {
            throw new Error("Invalid date of birth");
        }

        // TODO: Validate phoneNumber later
        if(!phoneNumber) {
            throw new Error("Invalid phoneNumber");
        }

        return Object.freeze({
            getUid: () => uid,
            getFullName: () => fullName,
            getGender: () => gender,
            getPhoneNumber: () => phoneNumber,
            getDateOfBirth: () => dateOfBirth,
            getUpdatedAt: () => updatedAt,
        });
    }
}
