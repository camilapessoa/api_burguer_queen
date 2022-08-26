const { Router } = require('express') //por que é desestruturado?
const UsersController = require('../controllers/UsersControllers')

const router = Router()

router.get('/users', UsersController.getAllUsers)
router.get('/users/:id', UsersController.getOneUser)

module.exports = router