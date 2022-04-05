const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const maxAge = 1000 * 60 * 60 * 24 * 31 * 24; //2 ans

function createToken(id) {
  return jwt.sign(
      {id},
      process.env.TOKEN_KEY,
      {expiresIn: maxAge}
  )
}

module.exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.create({ email, password });
    res.status(201).json({ user: user._id });
  } catch {
    res.status(400).json({ message: false });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    const token = createToken(user._id)
    res.cookie('auth', token, {httpOnly: true, maxAge})
    res.status(201).json({ connected: true, user: user._id});

  } catch(err) {
    res.status(401).json(err);
  }
};

module.exports.logOut = async (req, res) =>{
  res.cookie('auth', '', {maxAge: 1});
  res.status(200).send('Remove Token')
}