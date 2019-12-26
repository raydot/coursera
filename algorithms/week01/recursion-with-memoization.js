// Nothing to do with the class, just looked interesting.
// https://www.youtube.com/watch?v=Qk0zUZW-U_M

const fibonacci = n => {
  // If we have cached the value, return it.

  if (!fibonacci.cache[n]) {
    if (n == 1) {
      value = 1;
    } else if (n == 2) {
      value == 2;
    } else if (n > 2) {
      value = fibonacci(n - 1) + fibonacci(n - 2);
    }
    fibonacci.cache[n] = value;
    return value;
  } else {
    return fibonacci.cache[n];
  }
};

const makeFibonacci = j => {
  for (let i = 1; i <= j; i++) {
    // let keeps i out of the global space
    console.log(i + ": ", fibonacci(i));
  }
};

// For memoization
fibonacci.cache = {};

makeFibonacci(100);
//console.log(i);
//console.log(fibonacci(10));
