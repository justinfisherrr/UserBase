const axios = require("axios");

async function login(credentials) {
  try {
    const results = await axios.post("http://localhost:3000/login/", {
      username: credentials.username,
      password: credentials.password,
    });
    //If password matches, then return the user back.
    const loginSuccess = results.data.success;
    if (loginSuccess) {
      console.log("Login Sucessful");
      return results.data.user;
    } else {
      console.log("Login Unsuccessful");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
}

async function signup(userInfo) {
  try {
    await axios.post("http://localhost:3000/signup", {
      username: userInfo.username,
      password: userInfo.password,
      email: userInfo.email,
    });
    console.log("Successfully Added");
  } catch (err) {
    console.log(err.response.data.message);
  }
}
async function changePassword(userInfo) {
  try {
    await axios.put("http://localhost:3000/changepass", {
      id: userInfo.id,
      newpass: userInfo.newpass,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
}
module.exports = { login, signup, changePassword };
