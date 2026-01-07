const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }

})
// password hash
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    try {
        const hash = await bcrypt.hash(this.password, saltRounds);
        this.password = hash
    } catch (error) {
        return error;
    }

})

// password compare 
userSchema.methods.comparePassword = async function (password) {
    
    try {
        const result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = mongoose.model("user", userSchema)


