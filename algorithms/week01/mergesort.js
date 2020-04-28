// --------------------------- SOLUTION ---------
// See earlier commits for not-solutions.

// Split the array into halves and merge them recursively
let inv = 0;
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge2(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge2(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
      inv += left.length - indexLeft;
    }
  }
  if (isNaN(left.slice.indexLeft)) return "NAN LEFT";
  if (isNaN(right.slice.indexRight)) return "NAN RIGHT";
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

//const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
//const list = [9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0];

// Read that big old file:
const fs = require("fs");

let temp = fs
  .readFileSync("./IntegerArray.txt")
  .toString()
  .split("\r\n");

list = temp.map(item => {
  return parseInt(item);
});

console.log("list:", list);

// axios
//   .get("IntegerArray.txt")
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// async function readList() {
//   try {
//     await fs.readFile("IntegerArray.text", function(err, buf) {
//       list = buf.split("\n");
//       console.log(list);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// fs.readFile("IntegerArray.txt", function(err, buf) {
//   //console.log(buf);
//   // list = buf.split("\n");
//   // console.log(list);
// });

// readList();
// console.log(smoot);
console.log(mergeSort(list));
console.log("inv: " + inv);

// This is currently returning 2408005288 inversions which according to the classs isn't right.

// Test values
//const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
//const list = [9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0];
/* const list = [
  37,
  7,
  2,
  14,
  35,
  47,
  10,
  24,
  44,
  17,
  34,
  11,
  16,
  48,
  1,
  39,
  6,
  33,
  43,
  26,
  40,
  4,
  28,
  5,
  38,
  41,
  42,
  12,
  13,
  21,
  29,
  18,
  3,
  19,
  0,
  32,
  46,
  27,
  31,
  25,
  15,
  36,
  20,
  8,
  9,
  49,
  22,
  23,
  30,
  45
]; */
