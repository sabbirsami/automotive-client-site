import { useLoaderData, useParams } from "react-router-dom";

const ManageProducts = () => {
    const { brand } = useParams();
    const cars = useLoaderData();
    console.log(cars, brand);
    return <div></div>;
};

export default ManageProducts;
