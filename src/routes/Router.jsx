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
import UpdateTransaction from "../pages/UpdateTransaction/UpdateTransaction";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import Calculators from "../pages/Calculators/Calculators";
import Resources from "../pages/Resources/Resources";
import AboutUs from "../pages/AboutUs/AboutUs";
import DashboardLayout from "../layout/DashboardLayout";

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
        path: "/calculators",
        element: <Calculators />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "reports",
        element: (
          <PrivateRoute>
            <Report />
          </PrivateRoute>
        ),
      },
      {
        path: "add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction />
          </PrivateRoute>
        ),
      },
      {
        path: "my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-transactions/details/:id",
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
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateTransaction />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingSpinner />,
        loader: ({ params }) =>
          fetch(
            `https://fin-ease-server-alpha.vercel.app/transaction/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
