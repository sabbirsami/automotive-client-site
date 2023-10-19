import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/signIn.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { signInWithGoogle, signInWithEmail } = useContext(AuthContext);
    const [alreadyUsedEmailMessage, setAlreadyUsedEmailMessage] = useState("");
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmail(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setAlreadyUsedEmailMessage("");
                navigate("/");
            })
            .catch((err) => {
                const errorCode = err.code;
                if (errorCode == "auth/email-already-exists") {
                    setAlreadyUsedEmailMessage(
                        "You already have an account with that email."
                    );
                } else if (errorCode === "auth/invalid-password") {
                    setAlreadyUsedEmailMessage(
                        "Wrong password. Please try again"
                    );
                } else {
                    setAlreadyUsedEmailMessage(err.message);
                }
                console.log(err);
            });
    };
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
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
                            <h2 className="text-4xl pb-8 pt-4">Sign In</h2>
                            <form onSubmit={handleSignIn}>
                                <label
                                    htmlFor="email"
                                    className="block md:w-96 w-full pb-2 font-semibold"
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
                                <label className="block md:w-96 w-full  text-sm text-red-600">
                                    {alreadyUsedEmailMessage}
                                </label>

                                <button
                                    type="submit"
                                    className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md"
                                >
                                    Sign In
                                </button>
                            </form>
                            <div className="divider">OR</div>
                            <button
                                onClick={handleSignInWithGoogle}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark"
                            >
                                <FcGoogle className="text-2xl"></FcGoogle>Sign
                                In with Google
                            </button>
                            <div className="">
                                <p className=" pt-6">
                                    Don&#39;t have any account?{" "}
                                    <Link
                                        className="underline text-[#FD5631]"
                                        to={"/register"}
                                    >
                                        Register
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

export default Login;
