class Vehicle
{

    constructor(name)
    {
    this.name = name
    }
    sayhello ()
    {
        return this.name;
    }
}

class boat extends Vehicle
{
swim()
{
    return `${this.name} swim`
}

}
class car extends Vehicle
{
    drive()
    {
        return `${this.name} drive`
    }
}
class plane extends Vehicle
{
    fly()
    {
        return `${this.name} fly`
    }
}
const Car = new car("auto")
console.log(Car.drive())