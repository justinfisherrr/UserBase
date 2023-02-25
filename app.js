const { program } = require("commander");
const {
  mainMenu,
  loginMenu,
  createUserMenu,
  userMenu,
} = require("./helper/menu");
const { login, signup, changePassword } = require("./helper/requests");
const prompt = require("prompt-sync")({ sigint: true });
program
  .description("A sample application to parse options")
  .option("-a, --alpha", "Alpha")
  .option("-b, --beta <VALUE>", "Specify a VALUE", "Foo");

program.parse();

async function userMain(user) {
  let choice = 0;
  while (choice != 4) {
    choice = userMenu(user.username);
    if (choice == 1) {
      const password = prompt("Enter new password: ");
      await changePassword({ id: user._id, newpass: password });
    }
  }
}
async function main() {
  let choice = 0;
  while (choice != 3) {
    choice = mainMenu();
    if (choice == 1) {
      const credentials = loginMenu();
      const user = await login(credentials);
      if (user) await userMain(user);
    } else if (choice == 2) {
      const credentials = createUserMenu();
      const user = await signup(credentials);
    }
  }
}
main();
