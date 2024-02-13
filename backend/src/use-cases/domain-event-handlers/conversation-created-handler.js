export default function makeConversationCreatedHandler({makeUser, userDb, logger, IsoDate}) {
    return async function conversationCreatedHandler(conversation) {
        try {
            const userId = conversation.getUserId();
            let user = await userDb.findByUid(userId);
            if(!user) {
                return;
            }
            user = makeUser(user);
            user.addConversationId(conversation.getId());
            
            await userDb.update({
                uid: user.getUid(),
                fullName: user.getFullName(),
                phoneNumber: user.getPhoneNumber(),
                gender: user.getGender(),
                dateOfBirth: IsoDate.formatISO(user.getDateOfBirth()),
                conversationIds: user.getConversationIds(),
            });
        } catch(err) {
            logger.error(err.message, {location: __filename});
        }
    }
}
