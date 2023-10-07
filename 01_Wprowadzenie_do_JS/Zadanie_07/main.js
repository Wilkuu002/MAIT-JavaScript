const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function sortuj(a,b)
{
    return b.lenght-a.lenght;
}
biggestCities.sort(sortuj)
console.log(biggestCities[0]);