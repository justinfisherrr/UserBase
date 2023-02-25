//A router handling all requests from the user's profile
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.put("/changepass", async (req, res) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(
      req.body.id,
      {
        password: req.body.newpass,
      },
      { new: true }
    );
    await updatedUser.save();
    res.send(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { router };
