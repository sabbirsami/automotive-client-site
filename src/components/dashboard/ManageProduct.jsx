import toast from "react-hot-toast";
import PropTypes from "prop-types";

const ManageProduct = ({ cars }) => {
    const handleCarDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.deletedCount == 1) {
                    toast.success("Car remove successfully", {
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
                } else {
                    toast.error("Remove fail", {
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
        <div className="container-lg pb-32 pt-10">
            <h2 className="text-2xl font-semibold pb-16">Manage Product</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border-b border-white/30">
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cars.map((userCart) => (
                            <tr
                                key={userCart._id}
                                className="border-b border-white/30"
                            >
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 bg-white/30">
                                                <img
                                                    src={userCart.img}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {userCart.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{userCart.brand}</td>
                                <td>{userCart.type}</td>
                                <th>${userCart?.price}</th>
                                <th>
                                    <button
                                        onClick={() =>
                                            handleCarDelete(userCart._id)
                                        }
                                        className="btn btn-ghost btn-xs text-[#fd5631]"
                                    >
                                        delete
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs text-[#31fda8]">
                                        update
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;
ManageProduct.propTypes = {
    cars: PropTypes.object,
};
