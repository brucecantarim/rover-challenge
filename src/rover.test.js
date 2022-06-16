const rover = require("./rover");

test("rover.move()", () => {
  rover.move();
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(1);
  expect(rover.direction).toBe("N");
});

test("rover.rotateRight()", () => {
  rover.rotateRight();
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(1);
  expect(rover.direction).toBe("E");
});

test("rover.rotateLeft()", () => {
  rover.rotateLeft();
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(1);
  expect(rover.direction).toBe("N");
});

test("rover.processCommand()", () => {
  rover.processCommand("M");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(2);
  expect(rover.direction).toBe("N");
  rover.processCommand("R");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(2);
  expect(rover.direction).toBe("E");
  rover.processCommand("L");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(2);
  expect(rover.direction).toBe("N");
});

test("rover.processCommands()", () => {
  rover.processCommands("RRMMLL");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
  expect(rover.direction).toBe("N");
});

test("rover.processCoordinates()", () => {
  rover.processCoordinates([1, -1, "S"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-1);
  expect(rover.direction).toBe("S");
});

test("rover.input()", () => {
  rover.input(["1", "-1", "S"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-1);
  expect(rover.direction).toBe("S");
  rover.input(["MMMM"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-5);
  expect(rover.direction).toBe("S");
  rover.input(["RRMMLL"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-3);
  expect(rover.direction).toBe("S");
  rover.input(["N"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-3);
  expect(rover.direction).toBe("N");
  rover.input(["M"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-2);
  expect(rover.direction).toBe("N");
  rover.input(["R"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-2);
  expect(rover.direction).toBe("E");
  rover.input(["L"]);
  expect(rover.x).toBe(1);
  expect(rover.y).toBe(-2);
  expect(rover.direction).toBe("N");
  rover.input(["0", "0"]);
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
  expect(rover.direction).toBe("N");
});
