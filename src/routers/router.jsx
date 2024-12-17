import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
