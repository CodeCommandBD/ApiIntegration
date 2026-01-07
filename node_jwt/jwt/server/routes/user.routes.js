const router = require("express").Router();
const path = require("path");
const userModel = require("../model/user.model");
const { registerControllerGet, registerControllerPost, loginControllerGet, loginControllerPost } = require("../controller/user.controller");

// register route get
router.get("/register", registerControllerGet);

// register route post
router.post("/register", registerControllerPost);

// login route get
router.get("/login", loginControllerGet);


// login route post
router.post("/login", loginControllerPost)

module.exports = router;
