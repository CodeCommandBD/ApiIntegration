const express = require("express");
const app = express();
const userRouter = require("./router/user.router");
const path = require("path");


// user all router
app.use('/user',userRouter)


// register router
app.use('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, 'register.html'))

})

// login router
app.get('/login', (req, res) =>{
   res.cookie('name', 'shanto')
   res.cookie('age', 25)
   res.end()
})

// home page
app.use('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

// user ke error bujanor jonno  not found page
app.use((req, res) =>{
    res.sendFile(path.join(__dirname, '404.html'))
})


module.exports = app;