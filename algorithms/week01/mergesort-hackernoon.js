/**
 * A merge sort I found online.  Looks a lot cleaner than
 * my version as it uses slice.  Keying it in just to play
 * with it.
 *
 * By Alexander Kondov
 * https://medium.com/hackernoon/programming-with-js-merge-sort-deb677b777c0?
 */

// Split the array into halves and merge them recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // middle item
  const left = arr.slice(0, middle); // left half
  const right = arr.slice(middle); // right half

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
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
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [6, 0, 12, 21, -34, 22, 123, 987, 15, 11, 311, 911, 81, 6];
console.log(mergeSort(list));
