import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import DashboardMenu from "./DashboardMenu";
// {`${
//     light ? "bg-gray-300" : "bg-[#302D3D]"
// } p-5  shadow-xl  inline-block rounded-md`}
const Dashboard = () => {
    const { light } = useContext(AuthContext);
    return (
        <div className={`${light ? "bg-white text-black" : "bg-[#1f1b2d]"}`}>
            <DashboardNav />
            <div className="grid grid-cols-7 justify-between items-start h-[89vh] ">
                <div className="col-span-1 h-[89vh]  rounded-r-xl sticky ">
                    <DashboardMenu />
                </div>
                <div className="col-span-6 pt-6 ms-6 h-[89vh] overflow-scroll overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
