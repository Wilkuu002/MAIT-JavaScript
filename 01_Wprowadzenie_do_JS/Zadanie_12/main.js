function multiply(tablica) {
  tablica = [10, 10, 10, 10, 10];
  console.log(tablica.reduce((acc, cur) => acc * cur)); // 50
}
multiply();
