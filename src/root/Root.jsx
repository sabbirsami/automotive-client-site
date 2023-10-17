import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Outlet />
            hello
        </div>
    );
};

export default Root;
