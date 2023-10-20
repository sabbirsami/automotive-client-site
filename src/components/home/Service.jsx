import { useContext } from "react";
import { IoPricetags, IoSettingsSharp, IoFitness } from "react-icons/io5";
import { AuthContext } from "../auth/AuthProvider";

const Service = () => {
    const { light } = useContext(AuthContext);
    return (
        <div className={`${light ? "bg-white text-black" : "bg-[#1f1b2d]"}`}>
            <div className="container-lg pt-16 pb-32">
                <div className="grid lg:grid-cols-6  md:gap-10 gap-5">
                    <div className="lg:col-span-2">
                        {/* <img src={serviceCar} alt="" /> */}
                        <h6 className="text-xl pb-4">Our Services</h6>
                        <h1 className="md:text-5xl text-3xl">
                            feel the best experience with rental deals
                        </h1>
                    </div>
                    <div className="lg:col-span-1"></div>
                    <div className="lg:col-span-3">
                        <div className=" flex md:gap-8 gap-3 ">
                            <div className="">
                                <div
                                    className={`${
                                        light ? "bg-gray-300" : "bg-[#302D3D]"
                                    } p-5  shadow-xl  inline-block rounded-md`}
                                >
                                    <IoPricetags className="text-3xl"></IoPricetags>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="text-2xl">
                                    Deals for every budget
                                </h2>
                                <p
                                    className={`text-base ${
                                        light
                                            ? "text-black/50"
                                            : "text-white/50"
                                    } pt-4`}
                                >
                                    incredible price on branded cars and
                                    packages worldwide. cars with a full service
                                    history are more attractive to potential
                                    buyers and tend to hold their value better
                                </p>
                            </div>
                        </div>
                        <div className=" flex md:gap-8 gap-3 pt-8">
                            <div className="">
                                <div
                                    className={`${
                                        light ? "bg-gray-300" : "bg-[#302D3D]"
                                    } p-5  shadow-xl  inline-block rounded-md`}
                                >
                                    <IoSettingsSharp className="text-3xl"></IoSettingsSharp>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="text-2xl">Smoother engine</h2>
                                <p
                                    className={`text-base ${
                                        light
                                            ? "text-black/50"
                                            : "text-white/50"
                                    } pt-4`}
                                >
                                    Changing your engine oil and oil filter
                                    every year will lubricate moving parts more
                                    effectively and help to increase fuel
                                    efficiency
                                </p>
                            </div>
                        </div>
                        <div className=" flex md:gap-8 gap-3 pt-8">
                            <div className="">
                                <div
                                    className={`${
                                        light ? "bg-gray-300" : "bg-[#302D3D]"
                                    } p-5  shadow-xl  inline-block rounded-md`}
                                >
                                    <IoFitness className="text-3xl"></IoFitness>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="text-2xl">More reliable</h2>
                                <p
                                    className={`text-base ${
                                        light
                                            ? "text-black/50"
                                            : "text-white/50"
                                    } pt-4`}
                                >
                                    Regular checks to key components and the
                                    replacement of worn parts will detect and
                                    eliminate any faults that are likely to
                                    occur detect and eliminate any faults
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
