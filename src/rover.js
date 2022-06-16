const rover = {
  x: 0,
  y: 0,
  direction: "N",
  directions: ["N", "E", "S", "W"],
  commands: ["M", "R", "L"],

  setX: function (x) {
    if (!Number.isInteger(parseInt(x))) {
      throw new Error("X must be an integer");
    }
    this.x = x;
  },

  setY: function (y) {
    if (!Number.isInteger(parseInt(y))) {
      throw new Error("Y must be an integer");
    }
    this.y = y;
  },

  setDirection: function (direction) {
    if (!this.directions.includes(direction)) {
      throw new Error(
        `Invalid direction. Allowed directions are ${this.directions.join(
          ", "
        )}`
      );
    }
    this.direction = direction;
  },

  setPosition: function (x, y) {
    this.setX(x);
    this.setY(y);
  },

  move: function () {
    switch (this.direction) {
      case "N": // North
        this.setY(this.y + 1);
        break;
      case "E": // East
        this.setX(this.x + 1);
        break;
      case "S": // South
        this.setY(this.y - 1);
        break;
      case "W": // West
        this.setX(this.x - 1);
        break;
      default:
        throw new Error("Invalid direction");
    }
  },

  rotateRight: function () {
    switch (this.direction) {
      case "N": // North
        this.setDirection("E");
        break;
      case "E": // East
        this.setDirection("S");
        break;
      case "S": // South
        this.setDirection("W");
        break;
      case "W": // West
        this.setDirection("N");
        break;
      default:
        throw new Error("Invalid direction");
    }
  },

  rotateLeft: function () {
    switch (this.direction) {
      case "N": // North
        this.setDirection("W");
        break;
      case "E": // East
        this.setDirection("N");
        break;
      case "S": // South
        this.setDirection("E");
        break;
      case "W": // West
        this.setDirection("S");
        break;
      default:
        throw new Error("Invalid direction");
    }
  },

  processCoordinates: function (coordinates) {
    const [x, y, direction] = coordinates;
    if (!Number.isInteger(parseInt(x)) && !Number.isInteger(parseInt(y))) {
      throw new Error("Invalid command. X and Y must be integers.");
    }
    rover.setPosition(parseInt(x), parseInt(y));
    direction && rover.setDirection(direction);
  },

  processCommand: function (command) {
    switch (command) {
      case "M":
        this.move();
        break;
      case "R":
        this.rotateRight();
        break;
      case "L":
        this.rotateLeft();
        break;
      default:
        throw new Error("Invalid command");
    }
  },

  processCommands: function (commands) {
    const commandsArray = [...commands.toUpperCase()];
    if (commandsArray.some((c) => !this.commands.includes(c))) {
      throw new Error(
        "Invalid command. Accepted commands are M, R and L for movement or N, E, S and W for direction."
      );
    }

    commandsArray.map((command) => rover.processCommand(command));
  },

  input: function (args) {
    console.log(args[0].length > 1);
    if (args[0].length > 1 || this.commands.includes(args[0])) {
      console.log("Command accepted");
      rover.processCommands(args[0]);
    }

    if (args[0].length === 1) {
      if (args.length > 1) {
        console.log("Coordinates accepted");
        rover.processCoordinates(args);
      }

      if (this.directions.includes(args[0])) {
        console.log("Direction accepted");
        rover.setDirection(args[0]);
      }
    }

    console.log(
      `Rover's new position is: ${rover.x} ${rover.y} ${rover.direction}`
    );
  },
};

module.exports = rover;
