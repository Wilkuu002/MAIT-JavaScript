//Zadanie 1

const getSecondMaxNumber = (array) => {
    array.sort((a,b) => a - b);
    return array[array.length - 2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

//


//Zadanie 2

//Napisz funkcję strzałkową runInterval(n), która jako parametr (n) przyjmie liczbę całkowitą od 1 - 10.
//
// Zmienna n ma mieć domyślną wartość 8 w razie wywołania funkcji bez żadnej wartości.
//
// Wewnątrz funkcji uruchom interwał (setInterval) który ma wyświetlać napis "Hello" w konsoli co 500 ms.
//
// Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji.
//
// Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony.

const runInterval = (n = 8) => {
    console.log(n);
    let counter = 0;
    const intervalId = setInterval(() => {
        if (counter < n) {
            console.log("Hello");
            counter++;
        }
        else {
            clearInterval(intervalId);
        }
    }, 500);
}

// runInterval(3);

runInterval();



const generatelinks = (tab) => {

    return tab.map((el) => 'https://${el}.com')

}

const addresses =["google", "twitter", "facebook"]

const newUI = document.createElement("ul");
newUL.setAtribute("id","menu")
document.querySelector("body").append(newUI)
const menu = document.querySelector("menu")

generatelinks(arr).forEach(element => {
    const newLi = document.createElement("Li")
    newLi.textContent = el;
    menu.append(newLi);
    
});

const insertLinks = (arr, container )=>{
    arr.forEach(element => {
        const newLi = document.createElement("Li")
        const newA = document.createElement("a")
        newA.textContent = el;
        newA.href= el;
        newLI.append(newA)
        container.append(newLi);
    })       

}
insertLinks(generatelinks(addresses(arr)), menu)
