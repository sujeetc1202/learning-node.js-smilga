const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// default 64 kb
// last buffer -remainder
// highWaterMark - controls size
// const stream = createReadStream("./content/big-file.txt", {highWaterMark: 90000 })
// const stream = createReadStream("./content/big-file.txt", {encoding: })

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error);
});
