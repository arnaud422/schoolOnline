const UserModel = require('../models/users.model')
const jwt = require('jsonwebtoken')

module.exports.checkUser = async (req, res, next) =>{
    const token = res.cookie.pass
    if(token){
        jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) =>{
            if(err){
                res.locals.user = null
                res.cookie('pass', '', {maxAge: 1})
                next()
            }else{
                let user = await UserModel.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    }else{
        res.locals.user = null
        next()
    }
} 
//require Auth