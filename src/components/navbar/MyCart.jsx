import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const data = useLoaderData();
    const userData = data.filter((d) => d.userId === user.uid);
    console.log(userData);
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;
