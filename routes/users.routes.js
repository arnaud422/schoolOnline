const Router = require('express').Router()
const authControllers = require('../controllers/auth.controllers')

//route authentifications
Router.post('/register', authControllers.signUp)
Router.post('/login', authControllers.signIn)

//logout
Router.get('/logout', authControllers.logOut)

module.exports = Router