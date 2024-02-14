import Conversation from "./Conversation";
import SendMessage from "./SendMessage";
import TopMenu from "./TopMenu";
import ConversationHistories from "./ConversationHistories";
import { ConversationContextProvider, useConversationContext } from "../../contexts/ConversationContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCreateConversation from "../../hooks/useCreateConversation";
import useIdToken from "../../hooks/useIdToken";
import useGetConversationById from "../../hooks/useGetConversationById";
import useAddMessage from "../../hooks/useAddMessage";

function ChatBotPage() {
  const { id } = useParams();
  return (
    <ConversationContextProvider>
      <ChatBotPageHandler id={id} />
    </ConversationContextProvider>
  );
}
export default ChatBotPage;

function ChatBotPageHandler({ id }) {
  const [state, dispatch] = useConversationContext();
  const { mutate: createMutate, data: createResult, isSuccess: createIsSuccess } = useCreateConversation();
  const { mutate: getMutate, data: getResult, isSuccess: getIsSuccess }
    = useGetConversationById();
  const { mutate: addMutate, data: addResult, isSuccess: addIsSuccess }
    = useAddMessage();
  const token = useIdToken();

  useEffect(() => {
    if (id && token !== "default-token") {
      getMutate({ token, id });
    }
  }, [id, token]);
  useEffect(() => {
    if (getIsSuccess) {
      const data = getResult.data;
      dispatch({ type: "LOAD_CONVERSATION", payload: data });
    }
  }, [getIsSuccess]);

  useEffect(() => { // Create new conversation if no existing one
    if (token === "default-token") {
      return;
    }

    if (state.messages.length === 1) {
      createMutate({ token, firstMessage: state.messages[0].content });
    }

    // add user message to conversation(Once loaded)
    // and then get a model message accordingly
    if (state.messages.length >= 2 && state.id) {
      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage.sender === "user") {
        addMutate({ token, content: lastMessage.content, id: state.id });
      }
    }
  }, [state.messages, token, state.id]);
  useEffect(() => {
    if (addIsSuccess) {
      dispatch({ type: "ADD_MODEL_MESSAGE", payload: addResult.data.content })
    }
  }, [addIsSuccess]);

  useEffect(() => {
    if (createIsSuccess) {
      const data = createResult.data;
      dispatch({ type: "LOAD_CONVERSATION", payload: data });
    }
  }, [createIsSuccess]);

  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col w-full h-full relative grow gap-y-2">
        <TopMenu />
        <Conversation />
        <SendMessage />
      </div>
      <ConversationHistories />
    </div>
  );
}