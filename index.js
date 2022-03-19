const chalk = require("chalk");
const log = console.log;

// Basic Colors
log(chalk.red("Hi! How are you?!"));
log(chalk.yellow("Good."));

// Background Colors
log(chalk.bgRed("What's the matter?"));

// Styling & decoration
log(chalk.bold("Nothing."));
log(chalk.underline("Tell Me!"));

// Chaining
log(chalk.yellow.bgRed.underline("Not sure you can handle it."));
log(chalk.green.bgWhite.bold("Try Me."));

// Hex & RGB
log(chalk.hex("#009879").bold("Ok! My favorite color is Green!"));
log(chalk.rgb(20, 200, 50).bold("My favorite is also Green!!"));
