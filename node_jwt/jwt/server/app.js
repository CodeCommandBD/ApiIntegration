const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// home route
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
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
