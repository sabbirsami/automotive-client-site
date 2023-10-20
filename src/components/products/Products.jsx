import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const { brand } = useParams();
    const cars = useLoaderData();

    return (
        <div>
            <div className="container-lg py-16">
                <div className="carousel  w-full md:h-80 h-full overflow-y-hidden bg-[#302D3D] rounded-lg mb-10">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full items-center justify-center"
                    >
                        <div className="flex md:flex-row flex-col justify-between items-center md:gap-10 gap-1">
                            <div className="">
                                <h1 className=" md:text-5xl text-2xl ps-8 pb-10">
                                    {" "}
                                    Get 20% off on {brand} cars
                                </h1>
                            </div>
                            <div className="w-2/3">
                                <img
                                    src={
                                        cars[1]
                                            ? cars[1].img
                                            : "https://i.ibb.co/jgxffzk/pngegg-2.png"
                                    }
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
                            <div className="col-span-4">
                                <h1 className=" md:text-5xl text-2xl ps-8 pb-10">
                                    {" "}
                                    Best selling {brand} car of the year
                                </h1>
                            </div>
                            <div className="w-2/3">
                                <img
                                    src={
                                        cars[2]
                                            ? cars[2].img
                                            : "https://i.ibb.co/k6fNDFm/pngegg-3.png"
                                    }
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex md:flex-row flex-col justify-between items-center">
                            <div className="col-span-4">
                                <h1 className=" md:text-5xl text-2xl ps-8 pb-10">
                                    {" "}
                                    Get 20% off on {brand} cars
                                </h1>
                            </div>
                            <div className="">
                                <img
                                    src={
                                        cars[4]
                                            ? cars[4].img
                                            : "https://i.ibb.co/zstHKqD/pngegg-4.png"
                                    }
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {brand == "toyota" && cars.length == 6 ? (
                            <h1 className="md:text-2xl text-xl text-red-500">
                                {brand} car not available*
                            </h1>
                        ) : (
                            cars?.map((car) => (
                                <Product key={car._id} car={car}></Product>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
