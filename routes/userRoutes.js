const express = require("express");
const router = express.Router();

const {registerUser,loginUser,currentUser} = require("../controlleres/userController");
const validateToken = require("../middleware/verifyJwtToken");

 router.route("/register").post(registerUser);
 router.route('/login').post(loginUser);
 router.route('/current').post(validateToken,currentUser);

module.exports = router;