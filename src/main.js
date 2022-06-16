const rover = require("./rover");

const args = process.argv.slice(2);

if (args.length === 0) {
  throw new Error("Please provide a command");
}

rover.input(args);
