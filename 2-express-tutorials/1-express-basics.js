const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hits the server");
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found </h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on 5000");
});

// app.get  -- Read data or get single order (path params)
// app.post --Insert data (send data)
// app.put -- Update data (params + send data)
// app.delete -- Delete data (params)
// app.all
// app.use  -- responsible for middleware
// app.listen -- listening on port
