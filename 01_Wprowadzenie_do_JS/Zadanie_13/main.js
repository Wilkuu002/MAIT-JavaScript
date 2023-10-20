const tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenAverage() {
  const tablicaparzystych = [];
  tablica.forEach((element) => {
    if (element % 2 === 0) tablicaparzystych.push(element);
  });
  const suma = tablicaparzystych.reduce((acc, element) => acc + element, 0);
  let wynik = suma / tablicaparzystych.length;
  console.log(wynik);
}
getEvenAverage();
