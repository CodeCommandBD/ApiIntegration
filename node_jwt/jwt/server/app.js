const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const passport = require("passport");

require("./config/db.config");
require("./controller/passport.controller");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use(passport.initialize());





// home route
app.get('/', (req, res) => {
   res.send('Hello World!')
})






// routes error
app.use((req, res, next) =>{
   res.status(404).json({
      message: "Route not found"
   })
})
// server error
app.use((err, req, res, next) => {
   res.status(500).json({
      message: "Something went wrong",
      error: err
   })
})
module.exports = app;
