import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loading from "../shared/Loading";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
