const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const tokenMaxAge = 60 * 60 * 24 * 31 * 24; //2 ans

function createToken(id) {
  return jwt.sign(
      {id},
      process.env.TOKEN_KEY,
      {expiresIn: tokenMaxAge}
  )
}

module.exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.create({ email, password });
    res.status(201).json({ user: user._id });
  } catch {
    res.status(200).json({ message: false });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = UserModel.login(email, password);
    const token = createToken(user._id)
    res.cookie('pass', token, {httpOnly: true,tokenMaxAge})
    res.status(201).json({ connected: true });
  } catch {
    res.status(200).json({ connected: false });
  }
};