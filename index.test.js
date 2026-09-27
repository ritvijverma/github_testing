const test = require("node:test");
const assert = require("node:assert");
const { add, subtract } = require("./index");

test("add should return sum", () => {
  assert.strictEqual(add(10, 20), 30);
});

test("subtract should return difference", () => {
  assert.strictEqual(subtract(20, 10), 10);
});