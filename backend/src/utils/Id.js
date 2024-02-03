import { createId, isCuid } from '@paralleldrive/cuid2';

const Id = Object.freeze({
    createId,
    isValidId: isCuid
});

export default Id;
