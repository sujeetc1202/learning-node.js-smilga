const { writeFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big-file.txt", `Hello text ${i}\n`, { flag: "a" });
}
