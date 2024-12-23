import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import logo from "../assets/favicon.png";

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, password } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Email and password are required.");
            return;
        }
        dispatch(login({ email, password }));
    };

    // Close login modal
    const closeLoginModal = () => {
        setIsModalOpen(false);
        navigate(-1); // Navigate back
    };

    // Effect to handle authentication state changes
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate("/"); // Redirect to dashboard after successful login
        }
        dispatch(reset());
    }, [isError, isSuccess, user, navigate, dispatch]);

    if (!isModalOpen) return null;

    return (
        <section className="bg-gray-50 dark:bg-white">
            <ToastContainer position="top-right" autoClose={ 3000 } />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl mr-7 font-semibold text-gray-900 dark:text-black">
                    <img className="w-14 h-14" src={ logo } alt="logo" />
                    KathiravanArts
                </a>
                <div className="w-full text-black bg-white rounded-lg shadow-xl dark:border border-[#ca9236] border-2 sm:max-w-md xl:p-0 dark:bg-white relative">
                    { isLoading && <Spinner /> }
                    <button
                        onClick={ closeLoginModal }
                        className="absolute top-4 right-4 text-pink-500 text-2xl font-bold transform hover:rotate-180 transition-transform duration-300"
                    >
                        <FontAwesomeIcon icon={ faXmark } size="lg" />
                    </button>
                    <div className="p-6 space-y-4 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4" onSubmit={ handleSubmit }>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white border border-[#ca9236] text-black rounded-lg block w-full p-2.5"
                                    placeholder="name@gmail.com"
                                    required
                                    value={ email }
                                    onChange={ handleChange }
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-white border border-[#ca9236] text-black rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    required
                                    value={ password }
                                    onChange={ handleChange }
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-[#ca9236] hover:bg-[#d1c3b6] font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="mt-4 flex flex-col items-center justify-center mb-4">
                            <span className="text-sm text-gray-600">or sign in with</span>
                            <button
                                className="mt-2 px-4 py-2 border flex gap-2 border-[#ca9236] dark:border-[#ca9236] rounded-lg text-black dark:text-black hover:border-[#ca9236] dark:hover:border-[#ca9236] hover:text-black dark:hover:text-black hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                <img
                                    className="w-6 h-6"
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    loading="lazy"
                                    alt="google logo"
                                />
                                <span>Login with Google</span>
                            </button>
                        </div>

                        <p className="text-sm font-light text-gray-600 mt-4">
                            Don’t have an account yet?{ " " }
                            <NavLink to="/signup" className="font-medium text-[#ca9236] hover:underline">
                                Sign up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
