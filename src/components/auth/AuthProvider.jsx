import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    const data = { signInWithGoogle };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
};
