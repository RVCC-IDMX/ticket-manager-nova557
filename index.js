const chalk = require("chalk");
const log = console.log;

// Basic Colors
log(chalk.red("Hey, this is dcode!"));
log(chalk.magneta("I am magenta"));
log(chalk.yellow("Banana."));

// Background Colors
log(chalk.bgRed("Yes i have a red background!"));
log(chalk.ngGreen("Forest"));

// Styling & decoration
log(chalk.bold("I am bold."));
log(chalk.underline("Look at me"));

// Chaining
log(chalk.yellow.bgRed.underline("Warning!!!"));
log(chalk.green.bgWhite.bold("What is happening?"));

// Hex & RGB
log(chalk.hex("#009879").bold("dcode green!"));
log(chalk.rgb(20, 200, 50).bold("I wonder what this will be?"));
