const tablica = [1,2,3,4,5,6,7]
function distFromAverage(tablica)
{
    var suma=0
    var srednia=0;
    for(let i=0;i<tablica.lenght;i++)
    {
        suma=suma+tablica[i]
    }
    srednia = suma/tablica.lenght
}
console.log(distFromAverage(tablica))