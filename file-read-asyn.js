var fs = require("fs");

fs.readFile("readme.txt", "utf8", function (err, content) {
  if (err) {
    return console.log(err);
  }
  console.log(content);
});

console.log("Reading file...");
