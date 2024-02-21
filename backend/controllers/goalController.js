const asyncHandler = require('express-async-handler')

//@desc GEt Goals
// @route GET/api/goals
//access Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json ({message: 'Get Goals'})
})
//@desc SEt Goals
// @route SET/api/goals
//access Private
const setGoals = asyncHandler( async (req, res) => {
   if (!req.body.text) {
     res.status(400)
     throw new Error('PLease addd a text field')
   }

    res.status(200).json ({message: 'Set Goals'})
})
//@desc GEt Goals
// @route GET/api/goals
//access Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json ({message: `Update goal ${req.params.id}`})
})
//@desc GEt Goals
// @route GET/api/goals
//access Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json ({message: `Delete goal ${req.params.id}`})
} )



module.exports = {
   getGoals, setGoals , updateGoal , deleteGoal,
}