const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server attivo e funzionante." }).status(200);
});

module.exports = router;