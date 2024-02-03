import makePostUser from "./post-user";
import {addUser} from "./../use-cases/authentication";

const postUser = makePostUser({addUser});

export {
    postUser
};
