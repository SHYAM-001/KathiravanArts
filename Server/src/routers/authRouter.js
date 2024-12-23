const express = require("express");
const { registerUser, loginUser,resetPasswordConfirm, resetPassword } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password-confirm",resetPasswordConfirm);
router.post("/reset-password",resetPassword)



module.exports = router;
