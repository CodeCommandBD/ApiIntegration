const router = require("express").Router();
const {
  registerControllerPost,
  loginControllerPost,
  protectedRoute,
} = require("../controller/user.controller");

// register route post
router.post("/register", registerControllerPost);

// login route post
router.post("/login", loginControllerPost);

// profile route (protected)
router.get("/profile", protectedRoute);

module.exports = router;
