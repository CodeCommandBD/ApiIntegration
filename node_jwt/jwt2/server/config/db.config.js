const mongoose = require('mongoose')
require('dotenv').config()

const dbconnected = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DB Connected');
        
    } catch (error) {
        return error
    }
}

module.exports = dbconnected