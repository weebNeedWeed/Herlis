import {makeUser} from "./../../entities";

export default function makeAddUser({userDb}) {
    return async function addUser({
        uid,
        fullName,
        phoneNumber,
        gender,
        dateOfBirth,
    }) {
        if(await userDb.findByUid(uid)) {
            throw new Error("User already exists");
        }

        const user = makeUser({
            uid,
            fullName,
            phoneNumber,
            gender,
            dateOfBirth
        });

        return await userDb.insert(user.getUid(),{
            fullName: user.getFullName(),
            phoneNumber: user.getPhoneNumber(),
            gender: user.getGender(),
            dateOfBirth: user.getDateOfBirth()
        });
    }
}
