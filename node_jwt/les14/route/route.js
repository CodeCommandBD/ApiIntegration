const router = require("express").Router();
const path = require("path");
const { registerControllerPost, loginControllerGet, registerControllerGet, loginControllerPost } = require("../controller/controller");

// register route get
router.get("/register", registerControllerGet);

// register route post
router.post("/register", registerControllerPost);

// login route get
router.get("/login", loginControllerGet);

// login route post
router.post("/login", loginControllerPost);





// logout route get
router.get("/logout", (req, res) => {
  res.redirect("/api/user/login");
});

// profile protected route get
router.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "profile.html"));
});

module.exports = router;
