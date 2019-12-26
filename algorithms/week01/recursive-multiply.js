// recursive multiplication
// https://www.youtube.com/watch?v=2kYeQPN3FNc

const mult = (a, b) => {
  // base case #1
  if (a == 0 || b == 0) {
    return 0;
  }

  // base case #2
  if (a == 1) {
    // or vice-versa with recursive case
    return b;
  }

  // recursive case
  return mult(a - 1, b) + b; // or vice-versa with bc #1
};

console.log(mult(35, 91));
