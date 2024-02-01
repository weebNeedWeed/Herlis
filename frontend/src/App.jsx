import Button from "./components/Button";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";
import DefaultLayout from "./components/layout/DefaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: "chatbot",
                element: <ChatBotPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
