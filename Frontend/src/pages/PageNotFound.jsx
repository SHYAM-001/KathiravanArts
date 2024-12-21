import React from "react";
import svg from "../assets/404.svg"; // Ensure the path is correct
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory


const PageNotFound = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleBackToHome = () => {
        navigate("/"); // Navigate to the home page
    };

    return (
        <div className="cont-404">
            <img src={ svg } alt="404 Not Found" />
            <button onClick={ handleBackToHome } className="back-home-button">
                Back to Home
            </button>
        </div>
    );
};

export default PageNotFound;
