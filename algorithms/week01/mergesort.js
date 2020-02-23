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
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

//const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
//const list = [9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0];

// Read that big old file:
const fs = require("fs");

let list;

function readFile(whichFile) {
  // return a new promise
  return (new Promise() = (resolve, reject) => {
    fs.readFile(whichFile, function(err, buf) {
      if (err) {
        // console.log(err);
        reject(Error(err));
      }
      // console.log(buf.toString());
      const temp = buf.toString().split("\r\n");
      const list = temp.map(x => parseInt(x));
      //console.log(list);
    });
    if (list != null) resolve(list);
  });
}

/*
function promise = mergeSplitInvFromFile(fileName) {
  fs.readFile(fileName, function(err, buf) {
    if (err) console.log(err);
    // console.log(buf.toString());
    const temp = buf.toString().split("\r\n");
    const list = temp.map(x => parseInt(x));
    console.log(list);
  })
  .then(() => {
    mergeSort(list);
  })
  .then(() => {
    console.log("inv: " + inv);
  });
  //return list;
}*/
// run the program
//mergeSplitInvFromFile("IntegerArray.txt");

// console.log(mergeSort(mergeSplitInvFromFile("IntegerArray.txt")));
//console.log("inv: " + inv);
readFile("IntegerArray.txt").then(
  function(response) {
    console.log("success!", response);
  },
  function(error) {
    console.error("Failed!", error);
  }
);
