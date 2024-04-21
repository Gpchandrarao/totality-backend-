const express = require("express");
const userControllers = require("../controllers/user.controllers");

const router = express.Router();

router.post("/register", userControllers.userRegister);
router.post("/login", userControllers.loginUser);

module.exports = router;
