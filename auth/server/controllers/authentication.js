const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({ error: 'User already exists' });
    }

    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    return res.send({ token: tokenForUser(newUser) });
  } catch(e) {
    console.log(e);
    return res.status(400).send({ error: 'Error' });
  }
};

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
