import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(true);

    // This will open the modal when the component mounts
    useEffect(() => {
        setIsModalOpen(true);

        // Cleanup function to close the modal when the component is unmounted
        return () => setIsModalOpen(false);
    }, []);

    const handleGoogleLogin = (response) => {
        console.log(response);
        // Here you can send the response token to your backend to authenticate the user
    };

    const closeLoginModal = () => {
        setIsModalOpen(false); // Close the modal
        navigate(-2); // Navigate back to the previous page
    };

    // Prevent rendering modal if closed
    if (!isModalOpen) return null;

    return (
        <section className="bg-gray-50 dark:bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl mr-7 font-semibold text-gray-900 dark:text-black">
                    <img className="w-14 h-14" src={ logo } alt="logo" />
                    KathiravanArts
                </a>
                <div className="w-full text-black bg-white rounded-lg shadow-xl dark:border border-[#ca9236] border-2 md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:white relative">
                    <button
                        onClick={ closeLoginModal }
                        className="absolute top-4 right-4 text-pink-500 text-2xl font-bold transform hover:rotate-180 transition-transform duration-300"
                    >
                        <FontAwesomeIcon icon={ faXmark } size="lg" />
                    </button>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                            Sign up to continue
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-white border border-[#ca9236] text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-[#ca9236] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-[#ca9236]"
                                    placeholder="Username"
                                    required=""
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white border border-[#ca9236] text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-[#ca9236] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-[#ca9236]"
                                    placeholder="name@gmail.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-black">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-white border border-[#ca9236] text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-[#ca9236] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-[#ca9236]"
                                    required=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-[#ca9236] hover:bg-[#d1c3b6] focus:ring-4 focus:outline-none focus:ring-[#ca9236] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#ca9236] dark:hover:bg-[#d1c3b6] dark:focus:ring-[#d1c3b6]"
                            >
                                Sign up
                            </button>
                        </form>

                        {/* Google Login Section */ }
                        <div className="mt-4">
                            <div className="flex flex-col items-center justify-center mb-4">
                                <span className="text-sm text-gray-600 dark:text-gray-700">or sign in with</span>
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
                        </div>


                        <p className="text-sm font-light text-gray-600 dark:text-gray-700 mt-4">
                            If you already have an account?{ ' ' }
                            <NavLink to="/login" className="font-medium text-[#ca9236] hover:underline dark:text-[#ca9236]">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage