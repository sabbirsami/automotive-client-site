import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    return (
        <div>
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
                                <NavLink className=" p-4" to={"/add-product"}>
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/my-cart"}>
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className=" p-4" to={"/login"}>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
