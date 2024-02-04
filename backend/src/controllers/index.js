import makePostUser from "./post-user";
import {addUser} from "./../use-cases/authentication";
import logger from "./../infrastructure/logging-init";

const postUser = makePostUser({addUser, logger});

export {
    postUser
};
