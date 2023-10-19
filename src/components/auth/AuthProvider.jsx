import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const data = { signInWithGoogle, registerUser };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
};
