import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const UserSection = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>{user.displayName}</h2>
        </div>
    );
};

export default UserSection;
