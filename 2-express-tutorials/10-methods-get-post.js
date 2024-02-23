const express = require("express");
const app = express();

let { people } = require("./data");

// static assets
app.use(express.static("./3-methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse from json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// using javascript
app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).send({ success: true, person: name });
});


// using html
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please register first");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
