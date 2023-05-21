const assert = require("assert");
const { Calculator } = require("../public/javascripts/Calculator");

describe("Calculator", function () {
  let calc;
  beforeEach(function funky() {
    calc = new Calculator();
    this.retries(2);
  });
  describe("multiply()", () => {
    it("Should return 0, 0*2", () => {
      calc.multiply(2);
      assert.equal(calc.getResult(), 0);
    });
  });
  describe("subtract()", () => {
    it("Should return -2, 0-2", () => {
      calc.subtract(2);
      assert.equal(calc.getResult(), -2);
    });
  });
  describe("divide()", () => {
    it("Should return 0, 0/2", () => {
      calc.divide(2);
      assert.equal(calc.getResult(), 0);
    });
  });
  describe("add() and subtract()", () => {
    it("Should return 2, 0+4-2", () => {
      calc.add(4);
      calc.subtract(2);
      assert.equal(calc.getResult(), 2);
    });
  });
  describe("clearAll()", () => {
    it("Should return 0", () => {
      calc.add(5);
      calc.clearAll();
      assert.equal(calc.getResult(), 0);
    });
  });
});
