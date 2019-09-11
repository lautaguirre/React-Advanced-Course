const User = require('../models/user');

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

    return res.send({ success: true });
  } catch(e) {
    return res.status(400).send({ error: 'Error' });
  }
};
