const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT
const dbconnected = require('./config/db.config')

// db connect
dbconnected()

app.listen(PORT, ()=>{
    console.log(`server is runing at http://localhost:${PORT}`);
})



