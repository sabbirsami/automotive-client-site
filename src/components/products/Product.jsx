import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function Product({ car }) {
    return (
        <div className=" bg-[#302D3D] rounded-md">
            <div className="side-opacity h-64 rounded-t-md">
                <span className="relative ">
                    <img
                        src={car?.img}
                        className="w-full object-cover h-full"
                        alt=""
                    />

                    <span className="absolute top-5 right-5 bg-white rounded-full">
                        <span className="text-xs py-1 px-2 text-black">
                            <FaStar className="inline mb-1 text-[#FD5631]" />
                            <span className="ps-1">{car?.rating}</span>
                        </span>
                    </span>
                </span>
            </div>
            <div className="p-7">
                <h2 className="text-xl font-semibold flex justify-between items-center">
                    <span className="">{car?.name}</span>
                    <span className="text-[#FD5631]">${car?.price}</span>
                </h2>
                <p className="flex justify-between items-center text-sm pt-1 opacity-90">
                    <span>
                        Brand:{" "}
                        <span className="text-[#FD5631]">{car?.brand}</span>
                    </span>{" "}
                    <span>
                        Type:{" "}
                        <span className="text-[#FD5631]">{car?.type}</span>
                    </span>
                </p>
                <Link
                    className="w-full block py-3 mt-6 rounded-md text-sm text-center mx-auto bg-[#1f1b2d]"
                    to={`/product/${car.brand}/${car._id}`}
                >
                    Details <IoMdArrowForward className="inline" />
                </Link>
            </div>
        </div>
    );
}

export default Product;
Product.propTypes = {
    car: PropTypes.object,
};
