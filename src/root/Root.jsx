import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
