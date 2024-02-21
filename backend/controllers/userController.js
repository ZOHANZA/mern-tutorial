const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Authenticate a user
// @route POST/api/users/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'})
})
//@desc Register New user
// @route POST/api/users
//access Public
const registerUser = asyncHandler(async  (req, res) => {
    const { name, email, password} = req.body

     console.log(req.body);

    if (!name || !email || !password) {
         res.status(400)
         throw new Error('Please add all fields')
       }

    res.json({message: 'Regiter User'})
})
//@desc Get user data
// @route GET/api/users/me
//access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User data display'})
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}