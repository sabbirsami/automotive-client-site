import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import check from "../../assets/check.svg";
import driving from "../../assets/driving-test.svg";
import steering from "../../assets/steering-wheel.svg";
import accident from "../../assets/accident.svg";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { brand } = useParams();
    const selectedCar = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, price, type, img, description } = selectedCar[0];
    const handleAddToCart = () => {
        const userId = user.uid;
        const userEmail = user.email;
        const cartData = { name, type, img, brand, price, userId, userEmail };
        console.log(cartData);
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cartData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    toast.success("Car added successfully", {
                        duration: 4000,
                        position: "top-center",

                        // Styling
                        style: {
                            marginTop: "35px",
                        },

                        // Aria
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });
                }
            });
    };
    return (
        <div className="container-lg pb-28">
            <div className="py-6">
                <nav>
                    <ul className="flex">
                        <li>
                            <Link to={"/"} className="text-white/40">
                                Home{" "}
                                <span>
                                    <MdOutlineArrowForwardIos className="inline mx-3" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/product/${brand}/`}
                                className="text-white/40"
                            >
                                {brand}{" "}
                                <span>
                                    <MdOutlineArrowForwardIos className="inline mx-3" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>{name}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="grid grid-cols-5 gap-16">
                <div className="col-span-3 rounded-lg">
                    <h1 className="text-2xl font-bold pb-6">{name}</h1>
                    <div className=" rounded-lg bg-hero side-opacity bg-cover bg-no-repeat">
                        <img src={img} className=" rounded-lg" alt="" />
                    </div>
                    <div className="p-10 bg-[#302D3D] rounded-md grid grid-cols-4 gap-4 text-center my-8">
                        <div className="">
                            <div className="py-2 px-3 mx-auto ">
                                <img
                                    src={check}
                                    className=" py-2 text-center mx-auto"
                                    alt=""
                                />
                            </div>
                            <h2 className="">
                                Checked and Certified by Finder
                            </h2>
                        </div>
                        <div className="">
                            <div className="p-2">
                                <img
                                    src={steering}
                                    className="py-2 text-center mx-auto"
                                    alt=""
                                />
                            </div>
                            <h2 className="">
                                Checked and Certified by Finder
                            </h2>
                        </div>
                        <div className="">
                            <div className="p-2">
                                <img
                                    src={driving}
                                    className="py-2 text-center mx-auto"
                                    alt=""
                                />
                            </div>
                            <h2 className="">
                                Checked and Certified by Finder
                            </h2>
                        </div>
                        <div className="">
                            <div className="p-2">
                                <img
                                    src={accident}
                                    className="py-2 text-center mx-auto"
                                    alt=""
                                />
                            </div>
                            <h2 className="">
                                Checked and Certified by Finder
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ">
                    <div className="pb-6">
                        <span className="py-1 px-2 bg-blue-500 me-3 rounded-md">
                            new
                        </span>
                        <span className="py-1 px-2 bg-green-400 rounded-md">
                            Certified
                        </span>
                        <h1 className="text-3xl pt-8 pb-4 font-bold">
                            ${price}
                        </h1>
                        <div className="flex gap-6">
                            <p className=" border-e pe-6">
                                <BsSpeedometer className="inline me-2 mb-1" />
                                25K miles
                            </p>
                            <p className="">
                                <HiLocationMarker className="inline me-2 mb-1" />
                                Chicago, IL 60603
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#302D3D] p-6 rounded-md">
                        <h1 className="text-2xl font-bold pb-6 ">
                            Specifications
                        </h1>
                        <p className=" text-white/80">
                            <span className="font-semibold text-white">
                                Manufacturing Year:
                            </span>{" "}
                            2018
                        </p>
                        <p className=" text-white/80">
                            <span className="font-semibold text-white">
                                Type:
                            </span>{" "}
                            {type}
                        </p>
                        <p className=" text-white/80">
                            <span className="font-semibold text-white">
                                Engine:
                            </span>{" "}
                            2.5L Turbo 6 Cylinder
                        </p>
                        <p className=" text-white/80">
                            <span className="font-semibold text-white">
                                Brand:
                            </span>{" "}
                            {brand}
                        </p>
                        <p className=" text-white/80 pt-6">
                            <span className="font-semibold text-white">
                                Description:
                            </span>{" "}
                            {description}
                        </p>
                    </div>
                    <div className="p-6 border mt-6 rounded-md border-[#302D3D]">
                        <h1 className="text-2xl font-bold pb-6 ">Contact</h1>
                        <p className="flex items-center gap-2">
                            <span className="text-[#FD5631]"> Phone: </span>
                            +880 197070 6676
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-[#FD5631]"> Email: </span>
                            smd71430@gmail.com
                        </p>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
