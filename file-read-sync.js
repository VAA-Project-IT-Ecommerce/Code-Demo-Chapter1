var fs = require("fs");
var content = fs.readFileSync("readme.txt", "utf8");
console.log(content);
console.log("Đang đọc file...");
