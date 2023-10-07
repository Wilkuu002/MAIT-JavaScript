const cake = "🎂";
const data = new Date('August 14 2002, 12:00:00 GMT+1:00')

var aktualnyCzas = new Date()
var ile =aktualnyCzas.getFullYear() - data.getFullYear()

console.log(ile)
for(var i=0;i<ile;i++)
{
console.log(cake)
}