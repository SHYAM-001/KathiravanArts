import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:5000"; // Update with your backend URL

// API Endpoints
const REGISTER_URL = `${BACKEND_DOMAIN}/api/auth/register`;
const LOGIN_URL = `${BACKEND_DOMAIN}/api/auth/login`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/auth/reset-password`;
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/auth/reset-password-confirm`;
const GET_USER_INFO = `${BACKEND_DOMAIN}/api/auth/user-info`;

// Register User
const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await axios.post(REGISTER_URL, userData, config);
        return response.data;
    } catch (error) {
        console.error(
            "Error during registration:",
            error.response ? error.response.data : error.message
        );
        throw error; // Propagate the error for further handling
    }
};

// Login User
const login = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await axios.post(LOGIN_URL, userData, config);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error(
            "Error during login:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

// Logout User
const logout = () => {
    localStorage.removeItem("user");
};

// Reset Password
const resetPassword = async (email) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await axios.post(RESET_PASSWORD_URL, { email }, config);
        return response.data;
    } catch (error) {
        console.error(
            "Error during password reset:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

// Reset Password Confirmation
const resetPasswordConfirm = async (passwordData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, passwordData, config);
        return response.data;
    } catch (error) {
        console.error(
            "Error during password reset confirmation:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

// Get User Info
const getUserInfo = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    };

    try {
        const response = await axios.get(GET_USER_INFO, config);
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching user info:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

// Exporting authService with all methods
const authService = {
    register,
    login,
    logout,
    resetPassword,
    resetPasswordConfirm,
    getUserInfo,
};

export default authService;
