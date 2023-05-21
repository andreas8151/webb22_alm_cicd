const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json("AW,JB,EH,SL");
});

module.exports = router;
