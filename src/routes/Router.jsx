import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Report from "../pages/Report/Report";
import AddTransaction from "../pages/AddTransaction/AddTransaction";
import Error404 from "../pages/Error404/Error404";
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import PrivateRoute from "./PrivateRoute";
import MyTransactions from "../pages/MyTransactions/MyTransactions";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <Report />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fin-ease-server-alpha.vercel.app/transaction/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
