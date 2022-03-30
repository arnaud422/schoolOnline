const Router = require('express').Router()
const authControllers = require('../controllers/auth.controllers')

//route authentifications
Router.post('/register', authControllers.signUp)

module.exports = Router