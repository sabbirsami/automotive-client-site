import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="sticky">
            <div className="container-lg">
                <div className="flex justify-between items-center py-5">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <nav className=" text-white">
                        <ul className="flex items-center">
                            <li>
                                <NavLink className=" p-4" to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/add-car"}>
                                    Add Car
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/cart"}>
                                    My Cart
                                </NavLink>
                            </li>

                            <li>
                                {user ? (
                                    <div className=" bg-[#302D3D] py-1 px-2 flex gap-2 rounded-full items-center">
                                        <p className="ps-1">
                                            {user.displayName}
                                        </p>
                                        <div className="dropdown dropdown-end">
                                            <label
                                                tabIndex={0}
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-lg dropdown-content mt-3 z-[1]  p-1 shadow bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md rounded-box w-24"
                                            >
                                                <p className="text-center py-1">
                                                    <button
                                                        onClick={handleSignOut}
                                                    >
                                                        Sign Out
                                                    </button>
                                                </p>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink className={"p-4"} to={"/login"}>
                                        Sign In
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
