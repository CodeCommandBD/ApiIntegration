const express = require('express');
const path = require('path')
const userRouter = require('./route/user.route')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api/users', userRouter)


// home page route
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})






// routes error handling
app.use((req, res, next)=>{
    res.status(404).json({
        message: "Route Not Found"
    })
})

// global error handling
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: "Internal Server Error"
    })
})

module.exports = app