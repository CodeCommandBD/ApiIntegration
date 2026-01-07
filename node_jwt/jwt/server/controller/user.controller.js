const path = require("path");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const passport = require("passport");


// register controller get
const registerControllerGet = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "register.html"));
};

// register controller post
const registerControllerPost = async (req, res) => {
  try {
    // check user is already registered or not
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // create new user
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser
      .save()
      .then((user) => {
        res.send({
          success: true,
          message: "User registered successfully!",
          user: {
            username: user.username,
            email: user.email,
            id: user._id,
          },
        });
      })
      .catch((error) => {
        res.send({
          success: false,
          message: "User registration failed!",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// login controller get
const loginControllerGet = (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
};

// login controller post
const loginControllerPost = async (req, res) => {
  try {
    // check user is already registered or not
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found!",
      });
    }

    // compare password
    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({
        success: false,
        message: "Incorrect password!",
      });
    }

    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // login successful - send token
    return res.status(200).send({
      success: true,
      message: "Login successful!",
      token: "Bearer " + token,
      user: {
        username: user.username,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// protected route
const protectedRoute = passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    };



module.exports = {
  registerControllerGet,
  registerControllerPost,
  loginControllerGet,
  loginControllerPost,
  protectedRoute,
};
