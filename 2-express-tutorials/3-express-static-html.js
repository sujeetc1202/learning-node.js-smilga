const express = require("express");
const path = require("path");
const app = express();

// setup static and middlewares
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   // adding to static assests
//   // SSR server side rendering

//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
  res.send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
