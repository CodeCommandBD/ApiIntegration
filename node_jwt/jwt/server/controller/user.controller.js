const path = require("path");
const userModel = require("../model/user.model");


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
  } catch (error) {}
};

module.exports = {
  registerControllerGet,
  registerControllerPost,
  loginControllerGet,
  loginControllerPost,
};
