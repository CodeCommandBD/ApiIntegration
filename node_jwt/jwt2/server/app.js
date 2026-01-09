const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const userRouter = require("./routes/user.routes");
require("./config/passport.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/users", userRouter);

// route error handle

app.use((req, res, next) => {
  res.status(404).send({
    status: false,
    message: "Route Not Found",
  });
});

// route error handle

app.use((err, req, res, next) => {
  res.status(500).send({
    status: false,
    message: "Internal Server Error",
  });
});

module.exports = app;
