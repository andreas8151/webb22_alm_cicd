const express = require("express");
const { Calculator } = require("../public/javascripts/Calculator");

const router = express.Router();
const calc = new Calculator();

// router.get('/', (req, res, next) => {
//   res.render('calc', { title: 'Calculator' });
// });
router.get("/add/:param1&:param2", (req, res, next) => {
  const { param1, param2 } = req.params;

  calc.add(Number(param1));
  calc.add(Number(param2));
  res.send(`Result: ${calc.getResult()}`);
});

// router.get('/clearAll', (req, res, next) => {
//   calc.clearAll();
//   res.send(`Result: ${calc.getResult()}`);
// });

module.exports = router;
