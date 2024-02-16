import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatBotPage from "./pages/chatbot/ChatBotPage";
import DefaultLayout from "./components/layout/DefaultLayout";
import AuthLayout from "./components/layout/AuthLayout";
import SignInPage from "./pages/auth//SignIn/SignInPage";
import ForgotPasswordPage from "./pages/auth//SignIn/ForgotPassword";
import SignUpPage from "./pages/auth/SignUp/SignUpPage";
import { Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignOutPage from "./pages/auth/SignOutPage";

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
        path: "chat/",
        element: <ChatBotPage />,
      },
      {
        path: "chat/:id",
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
        element: <Navigate to="/auth/signin" replace={true} />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "signout",
        element: <SignOutPage />
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer closeOnClick />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
