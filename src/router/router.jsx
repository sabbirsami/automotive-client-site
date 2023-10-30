import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import AddCar from "../components/dashboard/AddCar";
import Products from "../components/products/Products";
import ProductDetails from "../components/products/ProductDetails";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import PrivateRoute from "../components/auth/PrivateRoute";
import MyCart from "../components/navbar/MyCart";
import ErrorElement from "../components/shared/ErrorElement";
import UpdateCar from "../components/dashboard/UpdateCar";
import Dashboard from "../components/dashboard/Dashboard";
import UserSection from "../components/dashboard/UserSection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/cart",
                element: (
                    <PrivateRoute>
                        <MyCart />
                    </PrivateRoute>
                ),
                loader: () =>
                    fetch(
                        `https://automotive-server-site-gamma.vercel.app/cart/`
                    ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/product/:brand",
                element: <Products />,
                loader: ({ params }) =>
                    fetch(
                        `https://automotive-server-site-gamma.vercel.app/product/${params.brand}`
                    ),
            },
            {
                path: "/product/:brand/:id",
                element: (
                    <PrivateRoute>
                        <ProductDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://automotive-server-site-gamma.vercel.app/product/${params.brand}/${params.id}`
                    ),
            },
            {
                path: "/update/:brand/:id",
                element: (
                    <PrivateRoute>
                        <UpdateCar />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://automotive-server-site-gamma.vercel.app/product/${params.brand}/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <UserSection />,
            },
            {
                path: "/dashboard/add-car",
                element: <AddCar />,
            },
        ],
    },
]);
export default router;
