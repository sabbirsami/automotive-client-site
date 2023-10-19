import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import AddCar from "../components/dashboard/AddCar";
import Products from "../components/products/Products";
import ProductDetails from "../components/products/ProductDetails";

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
                path: "/product/:brand",
                element: <Products />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/product/${params.brand}`),
            },
            {
                path: "/product/:brand/:id",
                element: <ProductDetails />,
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/product/${params.brand}/${params.id}`
                    ),
            },
            {
                path: "/add-car",
                element: <AddCar />,
            },
        ],
    },
]);
export default router;
