const router = require("express").Router();
const path = require("path");
const userModel = require("../model/user.model");
const { registerControllerGet } = require("../controller/user.controller");

// register route get
router.get("/register", registerControllerGet);

// register route post
router.post("/register", (req, res) => {
  // check user is already registered or not
  const user = userModel.findOne({ email: req.body.email });
  if (user){
    return res.status(400).json({ message: "User already exists!" });
  }
  const newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  newUser.save()
  res.status(201).redirect("/users/login");
});

// login route get
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});


// login route post
router.post("/login", (req, res) => {
    
})

module.exports = router;
