var fs = require("fs");
var fcontent;

function readingfile(callback) {
  fs.readFile("readme.txt", "utf8", function (err, content) {
    if (err) {
      return console.error(err.stack);
    }
    fcontent = content;
    callback(content);
  });
}

function mycontent(content) {
  console.log("Nội dung của file: \n" + content);
}

readingfile(mycontent);

console.log("Reading files...");
