const mongoose = require('mongoose');
const config = require('../config/config');

const dbUrl = config.db.url;

mongoose
.connect(dbUrl)
.then(()=>{
    console.log('Database connected successfully');
})
.catch((err)=>{
    console.log('Database connection failed', err);
    process.exit(1)
})

module.exports = mongoose;