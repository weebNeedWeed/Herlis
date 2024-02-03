import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatBotPage from "./pages/chatbot/ChatBotPage";
import DefaultLayout from "./components/layout/DefaultLayout";
import AuthLayout from "./components/layout/AuthLayout";
import SignInPage from "./pages/auth/SignInPage";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chatbot/",
        element: <ChatBotPage />,
      },
      {
        path: "chatbot/:conversationId",
        element: <ChatBotPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/signin" replace={true} />
      },
      {
        path: "signin",
        element: <SignInPage />
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
