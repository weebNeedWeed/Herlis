import {makeUser} from "./../entities";

export default function makeAddUser({userDb}) {
    return async function addUser({
        uid,
        fullName,
        phoneNumber,
        gender,
        dateOfBirth,
    }) {
        const user = makeUser({
            uid,
            fullName,
            phoneNumber,
            gender,
            dateOfBirth
        }); // user.dateOfBirth is Date

        if(await userDb.findByUid(uid)) {
            throw new Error("User already exists");
        }

        return await userDb.insert({
            uid: user.getUid(),
            fullName: user.getFullName(),
            phoneNumber: user.getPhoneNumber(),
            gender: user.getGender(),
            dateOfBirth: user.getDateOfBirth().getTime(), // Timestamp
            conversationIds: user.getConversationIds(),
        });
    }
}
