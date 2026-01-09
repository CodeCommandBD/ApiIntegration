const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken');
require('dotenv').config()


const register = async (req, res) => {
    try {
        // user cheack 
        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send({
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
            status: true,
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
            return res.status(400).send({
                status: false,
                message: "user not found"
            })
        }

        // compare password
        const isPasswordMatched = await user.comparePassword(req.body.password)
        if(!isPasswordMatched){
            return res.status(400).send({
                status: false,
                message: "Invalid password"
            })
        }

        // generate token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '2d'
        })

        // send response
        return res.status(200).send({
            status: true,
            token: "Bearer " + token,
        })

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: 'user login faild'
        })
    }
}
const profile = (req, res) => {
    try {
        return res.status(200).send({
            status: true,
            user:{
                id: req.user._id,
                email: req.user.email,
            }
        })
    } catch (error) {
        return res.status(500).send({
            status:false,
            message: 'user profile failed try login again'
        })
    }
}


module.exports = {
    register,
    login,
    profile
}