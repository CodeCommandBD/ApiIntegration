// import path
const path = require("path");
const userModel = require("../models/user.model");
const passport = require("passport");

// register controller Get
const registerControllerGet = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "register.html"));
};

// register controller Post
const registerControllerPost = async (req, res) => {
  try {
    // check if user already exists
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // create new user
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.redirect("/api/user/login");
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login controller Get
const loginControllerGet = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "login.html"));
};

// login controller Post
const loginControllerPost = async (req, res) => {
  try {
    // check if user already exists
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    // check if password is correct
    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // passport authenticate
    passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!user) {
        return res.status(400).json({ message: "User not found!" });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.redirect("/api/user/profile");
      });
    })(req, res);

    


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerControllerGet,
  registerControllerPost,
  loginControllerGet,
  loginControllerPost,
};
