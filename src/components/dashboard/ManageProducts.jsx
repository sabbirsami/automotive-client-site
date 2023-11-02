import { useLoaderData, useParams } from "react-router-dom";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
    const { brand } = useParams();
    const cars = useLoaderData();
    console.log(cars, brand);
    return (
        <div>
            <ManageProduct cars={cars}></ManageProduct>
        </div>
    );
};

export default ManageProducts;
