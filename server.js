const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static("public"));
app.set("view engine", "ejs");

const loginRouter = require("./routes/login").router;
const signupRouter = require("./routes/signup").router;
const profileRouter = require("./routes/profile").router;
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(loginRouter);
app.use(signupRouter);
app.use(profileRouter);
const uri =
  "mongodb+srv://justinthedev:Keepthatshit333!@userbase.lamosog.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}
connect();
app.listen(3000, () => {
  console.log("server started on 3000");
});
