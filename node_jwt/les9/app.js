const express = require("express");
const app = express();
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded())
app.use(bodyParser.json())





// home page
app.post('/user', (req, res) =>{
    const name = req.body.name
    const age = req.body.age
    res.send(`User ${name} ${age}`)
})




module.exports = app;