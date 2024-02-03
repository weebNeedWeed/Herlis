import {userDb} from "./../../persistence";
import makeAddUser from "./add-user";

const addUser = makeAddUser({userDb});

export {addUser};
