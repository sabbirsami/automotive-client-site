import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cart/", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setCartData(data);
            });
    }, []);
    console.log(user);

    const userData = cartData?.filter((d) => d.userId === user.uid);
    console.log(userData);
    const handleCarDelete = (id) => {
        fetch(`https://automotive-server-site-gamma.vercel.app/cart/${id}`, {
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
            <h2 className="text-2xl font-semibold pb-16">My Cart</h2>
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
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {userData.map((userCart) => (
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
                                    <Link
                                        to={`/pay/${userCart._id}`}
                                        className="btn btn-ghost btn-xs text-green-400 bg-green-800/30"
                                    >
                                        Pay
                                    </Link>
                                </th>
                                <th>
                                    <button
                                        onClick={() =>
                                            handleCarDelete(userCart._id)
                                        }
                                        className="btn btn-ghost btn-xs text-[#fd5631] bg-orange-800/30"
                                    >
                                        delete
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

export default MyCart;
