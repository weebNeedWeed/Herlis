import DomainEventEmitter from "./../../utils/DomainEventEmitter";
import * as DomainEvents from "./../../entities/domain-events";
import userMessageAddedHandler from "./user-message-added-handler";

DomainEventEmitter.on(DomainEvents.USER_MESSAGE_ADDED, userMessageAddedHandler);
