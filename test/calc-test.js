const assert = require('assert');
const { Calculator } = require('../routes/calc');

describe('Calculator', function () {
  let calc;
  beforeEach(function () {
    calc = new Calculator();
    this.retries(2);
  });

  describe('multiply()', function () {
    it('Should return 0, 0*2', function () {
      calc.multiply(2);
      assert.equal(calc.getResult(), 0);
    });
  });
  
  describe('subtract()', function () {
    it('Should return -2, 0-2', function () {
      calc.subtract(2);
      assert.equal(calc.getResult(), -2);
    });
  });
  describe('divide()', function () {
    it('Should return 0, 0/2', function () {
      calc.divide(2);
      assert.equal(calc.getResult(), 0);
    });
  });
  describe('add() and subtract()', function () {
    it('Should return 2, 0+4-2', function () {
      calc.add(4);
      calc.subtract(2);
      assert.equal(calc.getResult(), 2);
    });
  });
  describe('clearAll()', function () {
    it('Should return 0', function () {
      calc.clearAll();
      assert.equal(calc.getResult(), 0);
    });
  });
});
