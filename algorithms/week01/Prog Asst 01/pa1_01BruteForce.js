let fs = require("fs");
let readline = require("readline");
let path = require("path");

const selectedFile = "IntegerArray.txt";
const filePath = path.join(__dirname, selectedFile);

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
  //output: process.stdout,
  console: false
});

let numArray = [];

readInterface.on("line", function(line) {
  //console.log(line);
  numArray.push(parseInt(line));
  console.log(numArray);
});

console.log(numArray.length); // need to wait for numArray to fill up...
