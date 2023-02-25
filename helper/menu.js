const prompt = require("prompt-sync")({ sigint: true });

let mainMenu = () => {
  console.log("MENU");
  console.log("1. Login\n2. Create Account\n3. Exit");
  return prompt("Please enter option: ");
};
let userMenu = (username) => {
  console.log(`WELCOME ${username}`);
  console.log(
    "1. Change password\n2. Add Friend\n3. Display Friends\n4. Logout"
  );
  return prompt("Please enter option: ");
};

let loginMenu = () => {
  let credentials = {
    username: "",
    password: "",
  };
  credentials.username = prompt("username: ");
  credentials.password = prompt("password: ");
  return credentials;
};
let createUserMenu = () => {
  let credentials = {
    username: "",
    password: "",
    email: "",
  };
  credentials.username = prompt("username: ");
  credentials.password = prompt("password: ");
  credentials.email = prompt("email: ");
  return credentials;
};

module.exports = { mainMenu, loginMenu, createUserMenu, userMenu };
