import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Profile from "../components/Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Report from "../pages/Report/Report";
import AddTransaction from "../pages/AddTransaction/AddTransaction";
import MyTransaction from "../pages/MyTransaction/MyTransaction";
import Error404 from "../pages/Error404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404/>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/add-transaction",
        Component: AddTransaction,
      },
      {
        path: "/my-transaction",
        Component: MyTransaction,
      },
      {
        path: "/reports",
        Component: Report,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
