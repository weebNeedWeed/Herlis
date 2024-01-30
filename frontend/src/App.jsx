import Button from "./components/Button";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DefaultLayout from "./components/ui/DefaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index:true,
                element: <HomePage />
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
