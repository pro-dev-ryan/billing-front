import Layout from "../Layouts/Layout";
import Home from "../Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
