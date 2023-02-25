const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  if (await User.findOne({ username: req.body.username })) {
    return res.status(400).json({ message: "Username already exists" });
  } else if (await User.findOne({ email: req.body.email })) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { router };
