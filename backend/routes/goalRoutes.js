const express = require('express')
const router =  express.Router()
const {getGoals} = require('../controllers/goalController')
const {setGoals} = require('../controllers/goalController')
const {updateGoal} = require('../controllers/goalController')
const {deleteGoal} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')



//Read Create Merged
//router.get('/', getGoals)........... //router.post('/',setGoals )
router.route('/').get(protect, getGoals).post(protect, setGoals)
//Update Delete Merged
//router.put('/:id',updateGoals ) ...........router.delete('/:id', deleteGoals )
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)





module.exports = router