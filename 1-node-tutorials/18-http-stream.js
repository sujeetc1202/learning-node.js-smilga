var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big-file.txt", "utf8");
    // res.end(text);

    const fileStream = fs.createReadStream("./content/big-file.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(5000);
