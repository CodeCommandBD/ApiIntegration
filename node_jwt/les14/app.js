const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./route/route");
const path = require("path");
const app = express();
require("./config/config");
require("dotenv").config();
require("./config/passport");
const mongoose = require("mongoose");

// session and passport
const session = require("express-session");
const passport = require("passport");
const { default: MongoStore } = require("connect-mongo");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware (MUST be before routes)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 দিন
      httpOnly: true,
      secure: false, // development এ false, production এ true
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
      collectionName: "sessions",
    }),
  })
);

// Passport middleware (MUST be after session, before routes)
app.use(passport.initialize());
app.use(passport.session());



// Routes (MUST be after session and passport)
app.use("/api/user", router);

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// server error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something broke!");
});

// not found route
app.use((req, res) => {
  res.status(404).send("Not Found!");
});

module.exports = app;
