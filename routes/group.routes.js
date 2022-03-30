const Router = require('express').Router()
const groupControllers = require('../controllers/group.controllers')

//route authentifications
Router.post('/createGroup', groupControllers.createGroup)
Router.post('/addMember/:id', groupControllers.addMember)

module.exports = Router