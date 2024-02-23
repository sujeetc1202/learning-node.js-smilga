const express = require("express");
const router = express.Router();

let { people } = require("../data");

// we will remove "/api/people" because now this becomes home route for people-route
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// using javascript
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).send({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  console.log("hello");
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

// PUT method
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `Person not found with ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `Person not found with ${req.params.id}` });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
