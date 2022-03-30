const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users.routes')
const groupRoutes = require('./routes/group.routes')

require('dotenv').config({path : './config/.env'})
require('./config/dbConnect')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//routes
app.use('/api/user', userRoutes)
app.use('/api/group', groupRoutes)

//démarage du server
app.listen(process.env.PORT, ()=>{
    console.log('Server en écoute sur' + process.env.PORT)
})