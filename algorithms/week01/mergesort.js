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

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k;
  let outArr = [];
  //let len = arr1.length * 2;

  for (k = 0; k < len; k++) {
    if (arr1[i] < arr2[j]) {
      outArr[k] = arr1[i];
      i += 1;
    } else {
      outArr[k] = arr2[j];
      j += 1;
    }
  }
  console.log(outArr);
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  //console.log(array);
  return array;
};

//swap(["dog", "cat", "bird", "squirrel"], 0, 2);

//merge([1, 4, 5, 8], [2, 3, 6, 7]);

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

const mySort = sort([[9, 12, 11, 21, 5, 18, 2, 71, 19, 1], 0]);
console.log("ms:", mySort);

/**]
 * This was enough code for me to understand the math presented
 * that follows in the course and book.  But what an
 * ugly solution!
 */
