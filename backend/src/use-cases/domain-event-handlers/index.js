import DomainEventEmitter from "./../../utils/DomainEventEmitter";
import makeConversationCreatedHandler from "./conversation-created-handler";
import {makeUser} from "./../../entities";
import {userDb} from "./../../infrastructure/persistence";
import logger from "./../../infrastructure/logging-init";
import IsoDate from "./../../utils/IsoDate";

//DomainEventEmitter.on("CONVERSATION_CREATED", 
//    makeConversationCreatedHandler({makeUser, userDb, logger, IsoDate}));
