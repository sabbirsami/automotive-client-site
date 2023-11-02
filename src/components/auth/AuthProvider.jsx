import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [light, setLight] = useState(false);
    console.log(light);

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const currentUserEmail = { email: userEmail };
            setUser(currentUser);
            if (currentUser) {
                axios
                    .post("http://localhost:5000/jwt", currentUserEmail, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
            } else {
                axios
                    .post("http://localhost:5000/log-out", currentUserEmail, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, [user?.email]);

    const data = {
        signInWithGoogle,
        registerUser,
        user,
        loading,
        signOutUser,
        signInWithEmail,
        setLoading,
        light,
        setLight,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
};
