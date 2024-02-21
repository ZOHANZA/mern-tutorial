const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@desc GEt Goals
// @route GET/api/goals
//access Private
const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find({ user: req.user.id})

    res.status(200).json (goals)
})
//@desc SEt Goals
// @route POST/api/goals
//access Private
const setGoals = asyncHandler( async (req, res) => {
   if (!req.body.text) {
     res.status(400)
     throw new Error('PLease addd a text field')
   }
    const goal = await Goal.create({
       text: req.body.text,
       user: req.user.id, 
})
    res.status(200).json (goal)
})
//@desc update a Goal
// @route PUT/api/goals
//access Private
const updateGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    // check for use
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure logged in user mathces the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json (updatedGoal)
})
//@desc Delete a Goal
// @route Delete/api/goals
//access Private
const deleteGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(404)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure logged in user mathces the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.deleteOne()



    res.status(200).json({id: req.params.id})
} )



module.exports = {
   getGoals, setGoals , updateGoal , deleteGoal,
}