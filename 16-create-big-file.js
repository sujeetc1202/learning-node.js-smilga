const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/bog-file.txt", `Hello text ${i}\n`, { flag: "a" });
}
