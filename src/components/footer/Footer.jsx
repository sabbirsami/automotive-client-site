import logo from "../../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className=" bg-[#282435]">
            <div className="border-b border-gray-600">
                <div className="container-lg">
                    <div className="flex  justify-between items-center py-5">
                        <div className="">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex items-center md:gap-6 gap-1">
                            <p className="flex items-center gap-2">
                                Eng <IoIosArrowDown />
                            </p>
                            <p className="flex items-center gap-2">
                                New Work
                                <IoIosArrowDown />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg py-10">
                <div className="flex md:flex-row flex-col justify-between items-start">
                    <div className="">
                        <h2 className="text-2xl font-bold">
                            Subscribe to our newsletter
                        </h2>
                        <p className=" text-sm py-3">
                            Don&#10076;t miss any relevant offers!
                        </p>
                        <div className="relative my-5">
                            <input
                                type="text"
                                placeholder="Your email"
                                className="bg-[#302D3D] p-4 rounded-md w-full"
                            />
                            <button className="absolute bg-[#FD5631] p-2 rounded-md right-2 top-2">
                                <RiSendPlaneFill className="text-2xl  me-1" />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2">
                            <span className="text-[#FD5631]"> Phone: </span>
                            +880 197070 6676
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-[#FD5631]"> Email: </span>
                            smd71430@gmail.com
                        </p>
                        <p className="text-[#FD5631] pt-6 pb-1 underline">
                            Social link:
                        </p>
                        <p>
                            <span className="hover:text-[#FD5631] hover:shadow-sm">
                                Facebook
                            </span>{" "}
                            <span className="hover:text-[#FD5631] hover:shadow-sm">
                                Instagram
                            </span>{" "}
                            <span className="hover:text-[#FD5631] hover:shadow-sm">
                                WhatsApp
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
