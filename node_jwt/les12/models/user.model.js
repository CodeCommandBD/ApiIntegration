const {  mongoose } = require("../config/db");

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,   
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);