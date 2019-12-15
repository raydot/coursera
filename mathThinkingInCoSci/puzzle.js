/** Find a six digit number that begins with
 ** 100 and is divisible by 9127.
 */

const findIt = () => {
  for (i = 0; i < 1000; i++) {
    outStr = ("000" + i).slice(-3);
    outStr = "100" + outStr;
    //console.log(outStr);
    if (parseInt(outStr) % 9127 == 0) {
      console.log("Found number ", outStr);
    }
  }
};

findIt();

// This works, the number is 100397
