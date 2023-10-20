import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

const Root = () => {
    const { light } = useContext(AuthContext);
    return (
        <div className={`${light ? "bg-white text-black" : "bg-[#1f1b2d]"}`}>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;
