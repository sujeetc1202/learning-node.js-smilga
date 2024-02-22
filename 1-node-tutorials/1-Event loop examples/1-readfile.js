const { readFile } = require("fs");
console.log("started");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("result", result);
  console.log("completed first task");
});

console.log("starting next file");
