// client server form theke server e data send then server e data receive korbo then client e data show korbo

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const path = require('path')



app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


// register page
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, "register.html"))
})


// server e data receive korbo then client e data show korbo
app.post('/register', (req, res) =>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    // client e data show korbo
    res.send(`User ${name} ${email} ${password}`)
})




module.exports = app;