import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/reg.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "./firebase.config";
import toast from "react-hot-toast";
const Register = () => {
    const { signInWithGoogle, registerUser, setLoading } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const [showPasswordValidationMessage, setShowPasswordValidationMessage] =
        useState("");
    const [alreadyUsedEmailMessage, setAlreadyUsedEmailMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const checkPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (checkPassword.test(password)) {
            setShowPasswordValidationMessage("");
            registerUser(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                    });
                    toast.success("Successfully Register", {
                        duration: 2000,
                        className: "mt-32",
                    });
                    setLoading(false);
                    setAlreadyUsedEmailMessage("");
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setAlreadyUsedEmailMessage(err.message);
                    toast.error(" Register fail", {
                        duration: 2000,
                        className: "mt-32",
                    });
                });
            console.log("ok");
        } else {
            setLoading(false);
            return setShowPasswordValidationMessage(
                "Password must contain at least one uppercase letter, one special character and be at least 6 characters long"
            );
        }
    };
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
                setAlreadyUsedEmailMessage("");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setAlreadyUsedEmailMessage(err.message);
            });
    };
    return (
        <div>
            <div className="container-lg">
                <div className="grid grid-cols-5 items-center gap-10 justify-between my-16">
                    <div className="h-full flex flex-col justify-between items-start col-span-3">
                        <h2 className="text-4xl pb-8">
                            Hey there! <br /> Welcome back.
                        </h2>
                        <img src={logo} alt="" />
                    </div>
                    <div className=" col-span-2">
                        <div className="bg-[#282435] rounded-lg md:px-10 p-6 m-3">
                            <h2 className="text-4xl pb-8 pt-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="email"
                                    className="block md:w-96 w-full pb-2 font-semibold"
                                >
                                    Your Name{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter email here.."
                                />
                                <label
                                    htmlFor="photo"
                                    className="block md:w-96 w-full pt-8 pb-2 font-semibold"
                                >
                                    Photo URL{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter photo URL.."
                                />
                                <label
                                    htmlFor="email"
                                    className="block md:w-96 w-full pt-8 pb-2 font-semibold"
                                >
                                    Your Email{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter email here.."
                                />
                                <label
                                    htmlFor="password"
                                    className="block w-full pb-2  pt-8 font-semibold"
                                >
                                    Password{" "}
                                    <span className="text-red-600">*</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="r rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Enter password here.."
                                />
                                <label className="block md:w-96 w-full text-sm text-red-600">
                                    {showPasswordValidationMessage}
                                </label>
                                <label className="block md:w-96 w-full  text-sm text-red-600">
                                    {alreadyUsedEmailMessage}
                                </label>

                                <button
                                    type="submit"
                                    className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md"
                                >
                                    Register
                                </button>
                            </form>
                            <div className="divider">OR</div>
                            <button
                                onClick={handleSignInWithGoogle}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark"
                            >
                                <FcGoogle className="text-2xl"></FcGoogle>
                                Register with Google
                            </button>
                            <div className="">
                                <p className=" pt-6">
                                    Already have any account?{" "}
                                    <Link
                                        className="underline text-[#FD5631]"
                                        to={"/login"}
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
