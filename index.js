const express = require('express')

require('dotenv').config({path : './config/.env'})
require('./config/dbConnect')

const app = express()



//démarage du server
app.listen(process.env.PORT, ()=>{
    console.log('Server en écoute sur' + process.env.PORT)
})