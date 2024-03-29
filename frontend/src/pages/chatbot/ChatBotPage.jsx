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
import { Helmet } from "react-helmet-async";
import EventSourceListener from "./EventSourceListener";
import { toast } from "react-toastify";

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
  const { mutate: createMutate, data: createResult, isSuccess: createIsSuccess, isError: createIsError } = useCreateConversation();
  const { mutate: getMutate, data: getResult, isSuccess: getIsSuccess }
    = useGetConversationById();
  const { mutate: addMutate, data: addResult, isSuccess: addIsSuccess, isError: addIsError }
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

    if (addIsError) {
      dispatch({ type: "ADD_MODEL_MESSAGE", payload: "Xin lỗi cậu, tớ không thể trả lời tin nhắn này" })
    }
  }, [addIsSuccess, addIsError]);

  useEffect(() => {
    if (createIsSuccess) {
      const data = createResult.data;
      dispatch({ type: "LOAD_CONVERSATION", payload: data });
    }

    if (createIsError) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  }, [createIsSuccess, createIsError]);

  return (
    <div className="h-full w-full flex">
      <Helmet>
        <title>Trò chuyện</title>
      </Helmet>
      <div className="flex flex-col w-full h-full relative grow gap-y-2">
        <TopMenu />
        <Conversation />
        <SendMessage />
      </div>
      <ConversationHistories />
      <EventSourceListener />
    </div>
  );
}