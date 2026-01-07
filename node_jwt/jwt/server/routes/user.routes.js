const router = require("express").Router();
const { registerControllerGet, registerControllerPost, loginControllerGet, loginControllerPost, protectedRoute } = require("../controller/user.controller");

// register route get
router.get("/register", registerControllerGet);

// register route post
router.post("/register", registerControllerPost);

// login route get
router.get("/login", loginControllerGet);


// login route post
router.post("/login", loginControllerPost)

// profile route
router.get('/profile', protectedRoute);

module.exports = router;
