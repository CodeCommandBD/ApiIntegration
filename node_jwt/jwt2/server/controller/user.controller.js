const userModel = require('../models/user.model')

const register = async (req, res) => {
    try {
        // user cheack 
        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(404).send({
                status: false,
                message: "user already exists"
            })
        }

        // create user
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save()
        return res.status(201).send({
            stauts: true,
            message: "user registered successfully"
        })

    } catch (error) {
        return res.status(400).send({
            status: false,
            message: "User Registration Failed"
        })
    }
}
const login = async (req, res) => {
    try {
        // user exists 
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).send({
                status: false,
                message: "user not found"
            })
        }

    } catch (error) {

    }
}
const profile = (req, res) => {
    res.send('profile')
}


module.exports = {
    register,
    login,
    profile
}