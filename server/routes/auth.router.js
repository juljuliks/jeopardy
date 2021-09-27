const router = require('express').Router();
const db = require('../db/models');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  let user;
  try {
    user = await db.User.create({ userName: username, email, hashpass: password });
  } catch (e) {
    console.log(e);
  }
  req.session.user = {
    id: user.id,
    name: user.userName,
  };
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.User.findOne({ where: { email } });
  } catch (e) {
    console.log(e);
  }

  if (password === user.hashpass) {
    req.session.user = {
      id: user.id,
      name: user.userName,
    };
    return res.json(user);
  }
  return res.sendStatus(400);
});

router.get('/me', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.json({});
});

router.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res
      .clearCookie('user_sid')
      .sendStatus(200);
  });
});

module.exports = router;
