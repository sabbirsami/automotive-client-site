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
                        <details className="dropdown">
                            <summary className="m-1 btn bg-transparent border-0 capitalize font-normal text-base">
                                {" "}
                                Manage Product
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className="rounded-md" value="toyota">
                                    <Link
                                        to={"/dashboard/manage-product/toyota"}
                                    >
                                        {" "}
                                        Toyota
                                    </Link>
                                </li>
                                <li className="rounded-md" value="ford">
                                    <Link to={"/dashboard/manage-product/ford"}>
                                        {" "}
                                        Ford
                                    </Link>
                                </li>
                                <li className="rounded-md" value="bmw">
                                    <Link to={"/dashboard/manage-product/bmw"}>
                                        BMW
                                    </Link>
                                </li>
                                <li className="rounded-md" value="mercedes">
                                    <Link
                                        to={
                                            "/dashboard/manage-product/mercedes"
                                        }
                                    >
                                        Mercedes-Benz
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/dashboard/manage-product/tesla"}
                                    >
                                        Tesla
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/dashboard/manage-product/honda"}
                                    >
                                        Honda
                                    </Link>
                                </li>
                            </ul>
                        </details>
                        <NavLink
                            className=" p-4 block"
                            to={"/dashboard/manage-product"}
                        ></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardMenu;
