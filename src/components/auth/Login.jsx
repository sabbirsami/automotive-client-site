import { Link } from "react-router-dom";
import logo from "../../assets/signIn.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
                            <form>
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

                                <button
                                    type="submit"
                                    className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md"
                                >
                                    Sign In
                                </button>
                            </form>
                            <div className="divider">OR</div>
                            <button
                                // onClick={handleSignInWithGoogle}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark"
                            >
                                <FcGoogle className="text-2xl"></FcGoogle>Login
                                with Google
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
