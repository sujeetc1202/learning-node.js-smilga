const express = require("express");
const app = express();

const peopleRoute = require("./routes/people-route");
const authRoute = require("./routes/auth-route");

// static assets
app.use(express.static("./3-methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse from json
app.use(express.json());

app.use("/api/people", peopleRoute);

app.use("/login", authRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
