const {Router} = require('express')

const userController = require('./user.controller')

const router =  Router()

router.get('/list', userController.list)

router.get('/register', userController.register)

module.exports = router
