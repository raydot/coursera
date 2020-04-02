function findit() {
  for (let i = 0; i < 100; i += 1) {
    if ((i - 2) % 3 === 0 && (i - 3) % 4 === 0 && (i - 4) % 5 === 0) {
      console.log(i);
    }
  }
}

findit();
