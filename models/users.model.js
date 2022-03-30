const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema(
{
  email: {
    type: String,
    required: true,
    validate: [isEmail],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password:{
      type: String,
      required: true,
      minlength: 8,
      max: 1024,
  },
  group:{
    type: [String]
  }
},
{
    timestamps: true,
}

);

//Permet de hash le mot de passe
userShema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next() 
})

//fonction static qui permet de verifier le mot de passe avec l' user
userShema.statics.login = async function(email, password){
    user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password)

        if(auth) return user
        
        throw Error('Invalid password')
    }
    throw Error('Invalid Email')
}

const UserModel = mongoose.model('user', userShema)
module.exports = UserModel