import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Gallery from "./Gallery";
import AboutPage from "./AboutPage";
import ContactForm from "./ContactForm";
import HomePage from "./HomePage";
import Footer from '../components/Footer'


const Main = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [type, setType] = useState("Home");

    useEffect(() => {
        if (location.pathname === "/") setType("Home");
        else if (location.pathname === "/about") setType("AboutUs");
        else if (location.pathname === "/contact") setType("ContactUs");
        else if (location.pathname === "/gallery") setType("Gallery");
        else setType("Home");
    }, [location.pathname]);

    const handleOnClick = (text) => {
        setType(text);
        navigate(
            text === "Home" ? "/" :
                text === "AboutUs" ? "/about" :
                    text === "ContactUs" ? "/contact" :
                        text === "Gallery" ? "/gallery" :
                            "/"
        );
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar onNavClick={ handleOnClick } />
            <div className="flex-grow"> {/* Added mt-16 to accommodate the NavBar height */ }
                { type === "Home" && <HomePage /> }
                { type === "AboutUs" && <AboutPage /> }
                { type === "ContactUs" && <ContactForm /> }
                { type === "Gallery" && <Gallery /> }
            </div>
            <Footer />
        </div>
    );
};

export default Main;
