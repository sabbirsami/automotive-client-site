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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                loader: () => fetch(`http://localhost:5000/cart/`),
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
                    fetch(`http://localhost:5000/product/${params.brand}`),
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
                        `http://localhost:5000/product/${params.brand}/${params.id}`
                    ),
            },
            {
                path: "/add-car",
                element: (
                    <PrivateRoute>
                        <AddCar />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
export default router;
