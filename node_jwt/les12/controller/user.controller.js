const User = require('../models/user.model')
const { v4: uuidv4 } = require('uuid')


// get all users controller
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            users: users
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            error: error.message
        })
    }
}
// get one user controller
const getOneUsers = async (req, res) => {

    try {
        const users = await User.findOne({
            id: req.params.id
        })

        res.status(200).json({
            users: users
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            error: error.message
        })
    }
}

// create user controller
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to create user",
            error: error.message
        })
    }
}

// update user controller
const updateUsers = async (req, res) => {

    try {
        const users = await User.findOne({
            id: req.params.id
        })
        users.name = req.body.name,
        users.age = Number(req.body.age),
        users.email = req.body.email,
        users.password = req.body.password

        await users.save()

        res.status(201).json({
            message: "User updated successfully",
            user: users
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to update user",
            error: error.message
        })
    }
}


// delete user controller
const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({
            id: req.params.id
        })

        res.status(200).json({
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            error: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    getOneUsers,
    createUser,
    updateUsers,
    deleteUser
}