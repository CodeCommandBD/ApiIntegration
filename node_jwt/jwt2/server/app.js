const express =  require('express')
const app =  express()
const cors = require('cors')
const bodyParser = require("body-parser")
const passport = require('passport')
const userRouter = require('./routes/user.routes')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize)
app.use('/users', userRouter)







// route error handle

app.use((req, res, next)=>{
    res.status(404).send({
        status: false,
        message: "Route Not Found"
    })
})

// route error handle

app.use((err, req, res, next)=>{
    res.status(500).send({
        status: false,
        message: "Internal Server Error"
    })
})



module.exports = app