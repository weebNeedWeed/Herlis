import { createContext, useContext, useReducer } from "react";

const initialStates = {
	ableToSubmit: true,
	messages: [],
	id: "",
	openHistoriesBox: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_USER_MESSAGE": {
			return {
				...state,
				ableToSubmit: false,
				messages: [
					...state.messages,
					{
						sender: "user",
						createdAt: Date.now(),
						content: action.payload
					}
				]
			}
		}
		case "ADD_MODEL_MESSAGE": {
			return {
				...state,
				ableToSubmit: true,
				messages: [
					...state.messages,
					{
						sender: "model",
						createdAt: Date.now(),
						content: action.payload
					}
				]
			}
		}
		case "LOAD_CONVERSATION": {
			return {
				...initialStates,
				...action.payload
			}
		}
		case "SET_OPEN_BOX_STATUS":
			return {
				...state,
				openHistoriesBox: action.payload
			}
		default:
			return state;
	}
}

const ConversationContext = createContext();

export const ConversationContextProvider = ({ children }) => {
	const value = useReducer(reducer, initialStates);
	return <ConversationContext.Provider value={value}>
		{children}
	</ConversationContext.Provider>
}

export const useConversationContext = () => {
	const context = useContext(ConversationContext);
	if (!context) {
		throw new Error("useConversationContext must be used within ConversationContext");
	}
	return context;
}