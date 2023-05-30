const express = require("express");
const LoginController = require("../controllers/LOginController");
const router = express.Router();

router.route("/").post(LoginController.login);

module.exports = router;
