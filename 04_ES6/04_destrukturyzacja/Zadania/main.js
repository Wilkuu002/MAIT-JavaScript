//Zadanie 1

const weather = [ "snow", "rain", "sun" ];

//const snow = weather[0];
//const sun = weather[2];
const [snow,,sun] = weather;

console.log(snow, "to nowy snow :)");
console.log(sun);


//Zadanie 2
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart } = slider;
console.log(type, "type");
console.log(autoStart, "autoStart");


const imiona = ['kacper', 'adam','jarek']
const [name1,name2,name3] = imiona
console.log(name1)


generateRandomNumbers = () =>
{
    let losowe =[]
    for(let i=0;i<6;i++)
    {
        let losowaLiczba=Math.floor(Math.random() * 10);
        losowe.push(losowaLiczba);
    }
    const [liczba1,,liczba3] = losowe
    console.log(liczba3)
    console.log(losowe)
}
generateRandomNumbers()

const cat = { name: "Mruczek",
age: 10,
getVoice: () => "miau miau asdfa sdfg"
};



const showAnimal = ({name, age:catAge, getVoice}) =>
{     
      return(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}`)
}
console.log(showAnimal(cat))