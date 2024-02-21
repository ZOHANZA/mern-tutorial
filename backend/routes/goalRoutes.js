const express = require('express')
const router =  express.Router()
const {getGoals} = require('../controllers/goalController')
const {setGoals} = require('../controllers/goalController')
const {updateGoal} = require('../controllers/goalController')
const {deleteGoal} = require('../controllers/goalController')


//Read Create Merged
//router.get('/', getGoals)........... //router.post('/',setGoals )
router.route('/').get(getGoals).post(setGoals)
//Update Delete Merged
//router.put('/:id',updateGoals ) ...........router.delete('/:id', deleteGoals )
router.route('/:id').delete(deleteGoal).put(updateGoal)





module.exports = router