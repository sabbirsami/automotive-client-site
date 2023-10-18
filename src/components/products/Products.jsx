import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
    const { brand } = useParams();
    const cars = useLoaderData();
    console.log(cars);
    console.log(brand);
    return (
        <div>
            <div className="container-lg py-16">
                <div className="carousel w-full h-80 bg-[#302D3D] rounded-lg mb-10">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full items-center justify-center"
                    >
                        <div className="flex justify-between items-center gap-10">
                            <div className="">
                                <h1 className=" text-5xl ps-8 pb-10">
                                    {" "}
                                    Get 20% off on {brand} cars
                                </h1>
                            </div>
                            <div className="">
                                <img src={cars[1].img} className="w-full" />
                            </div>
                        </div>
                        <div className="absolute flex gap-6 transform -translate-y-1/2 left-5 right-5 bottom-1">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex justify-between items-center">
                            <div className="col-span-4">
                                <h1 className=" text-5xl ps-8 pb-10">
                                    {" "}
                                    Get 20% off on {brand} cars
                                </h1>
                            </div>
                            <div className="">
                                <img src={cars[2].img} className="w-full" />
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
                </div>
                <h1>
                    Hello {brand} {cars.length}
                </h1>
            </div>
        </div>
    );
};

export default Products;
