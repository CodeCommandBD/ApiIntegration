const router = require("express").Router();
const path = require("path");
const { registerControllerPost, loginControllerGet, registerControllerGet, loginControllerPost, logoutController, profileController } = require("../controller/controller");

// register route get
router.get("/register", registerControllerGet);

// register route post
router.post("/register", registerControllerPost);

// login route get
router.get("/login", loginControllerGet);

// login route post
router.post("/login", loginControllerPost);





// logout route get
router.get("/logout", logoutController);

// profile protected route get
router.get("/profile", profileController);

module.exports = router;
