import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Dashboard = () => {
    const { light } = useContext(AuthContext);
    return (
        <div
            className={`${light ? "bg-white text-black" : "bg-[#1f1b2d]"} px-6`}
        >
            <DashboardNav />
            <Outlet />
        </div>
    );
};

export default Dashboard;
