const UserModel = require('../models/users.model')

module.exports.signUp = async (req, res) =>{
    const {email, password} = req.body

    try{
        const user = await UserModel.create({email, password})
        res.status(201).json({user: user._id})
    }
    catch{
        res.status(200).json({message: false})
    }
}

