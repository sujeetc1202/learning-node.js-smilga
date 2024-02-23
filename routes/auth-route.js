const express = require("express");

const router = express.Router();

// using html
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please register first");
});

module.exports = router;
