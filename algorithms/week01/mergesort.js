// Page 18

// Pseudocode is on p 16
/**
 * MergeSort
 *
 * Input: array A of n distinct integers.
 * Output: array with the same integers sorted from smallest to largest
 * -------------------------------------------------
 * //ignoring base cases
 * C := recursively sort first half of A
 * D := recursively sort second half of A
 * return Merge (C, D)
 */

// Base cases:
// If the input array contains only 0 or 1 elements, MergeSort returns it (it is already sorted).

// this algorithm doesn't split up the passed arrays!

// Assumption: passed arrays are both the same size.

const merge = (arr1, arr2) => {
  console.log(arr1);
  console.log(arr2);
  let i = 0;
  let j = 0;
  let k = 0;
  let term = arr1.length * 2;
  let outArr = [];
  // let len = arr1.length * 2;

  for (k = 0; k < term; k++) {
    // while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      outArr[k] = arr1[i];
      i += 1;
    } else {
      outArr[k] = arr2[j];
      j += 1;
    }
    // console.log("i:" + i, "j:" + j, "k:" + k);
  }
  console.log(outArr);
};

const mergeSortInv = (arr1, arr2) => {
  console.log(arr1);
  console.log(arr2);
  let i = 0;
  let j = 0;
  let k = 0;
  let inv = 0;
  let term = arr1.length * 2;
  let outArr = [];
  // let len = arr1.length * 2;

  for (k = 0; k < term; k++) {
    // while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      outArr[k] = arr1[i];
      i += 1;
    } else {
      outArr[k] = arr2[j];
      inv += arr1.length - i;
      j += 1;
    }
    console.log("i:" + i, "j:" + j, "k:" + k, "inv:" + inv);
  }
  console.log(outArr);
  console.log("inversions:", inv);
};

// Above approach is good but needs already sorted arrays.
// I have kind of bailed on the recursive sort part.  See below.
const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  //console.log(array);
  return array;
};

// swap(["dog", "cat", "bird", "squirrel"], 0, 2);

// merge([1, 4, 5, 8], [2, 3, 6, 7]);

const sort = blobToCheck => {
  let array = blobToCheck[0];
  let endIndex = blobToCheck[1];
  let index = -1;
  let max = -Infinity;
  for (let i = 0; i <= array.length - endIndex - 1; i++) {
    if (array[i] > max) {
      index = i;
      max = array[i];
    }
  }

  // push the max value to the end of the array
  array = swap(array, index, array.length - 1 - endIndex);

  if (endIndex < array.length - 1) {
    endIndex += 1;
    sort([array, endIndex]);
  } else {
    return array;
  }

  //let outVar = [array, endIndex];
  //return outVar;
};

// const mySort = merge([9, 12, 11, 21, 5, 18, 2, 71, 19, 1]);
// console.log("ms:", mySort);

// mergeSortInv([5, 10, 15, 20, 25], [7, 14, 21, 28, 35]);
// mergeSortInv([1, 3, 5], [2, 4, 6]);
// mergeSortInv([1, 6, 3], [2, 4, 5]);

/**
 * This was enough code for me to understand the math presented
 * that follows in the course and book.  But what an
 * ugly solution!
 */

// --------------------------- SOLUTION ---------

/**
 * Here is a better one:
 * Stole this from https://medium.com/hackernoon/programming-with-js-merge-sort-deb677b777c0
 * Very good example, especially as it uses slice to break the arrays down recursively.
 */

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

// Read that big old file:
const fs = require("fs");

fs.readFile("IntegerArray.txt", function(err, buf) {
  // console.log(buf.toString());
  const list = buf.split("\n");
  console.log(list);
});

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
console.log(mergeSort(list));
console.log("inv: " + inv);
