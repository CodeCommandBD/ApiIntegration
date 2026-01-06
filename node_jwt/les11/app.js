// area calculation using form in html 
// client side form theke data send then server e data receive korbo then client e data show korbo

const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')
const app = express();


// middleware 
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// route 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "view", "index.html"))
})
    
app.get('/circle', (req, res) =>{
    res.sendFile(path.join(__dirname, "view", "circle.html"))
})

app.post('/circle', (req, res) =>{
    const radius = req.body.radius
    const area = Math.PI * radius * radius
    res.send(`Area of circle is ${area}`)
})


app.get('/triangle', (req, res) =>{
    res.sendFile(path.join(__dirname, "view", "triangle.html"))
})

app.post('/triangle', (req, res) =>{
    const base = req.body.base
    const height = req.body.height
    const area = 1/2 * base * height
    res.send(`Area of circle is ${area}`)
})






module.exports = app;