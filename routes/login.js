const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("Connected");
});
router.post("/login", getUser, async (req, res) => {
  const loginSuccesssful = await bcrypt.compare(
    req.body.password,
    res.user.password
  );
  if (loginSuccesssful) res.send({ user: res.user, success: true });
  else res.send({ success: false });
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findOne({ username: req.body.username });
    if (user === null) {
      return res.status(404).json({ message: "cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}
module.exports = { router };
