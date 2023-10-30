import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const DashboardMenu = () => {
    const { light } = useContext(AuthContext);
    return (
        <div
            className={`${
                light
                    ? "bg-white text-black"
                    : "bg-[#302D3D] ps-3 rounded-r-xl py-6 h-[89vh]"
            }`}
        >
            <nav
                className={`${
                    light ? "bg-white text-black" : "bg-[#302D3D] rounded-r-xl"
                } h-full`}
            >
                <ul className="">
                    <li className="">
                        <Link className=" p-4 block" to={"/dashboard"}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            className=" p-4 block"
                            to={"/dashboard/add-car"}
                        >
                            Add Car
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=" p-4 block" to={"/dashboard/cart"}>
                            Manage Product
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardMenu;
