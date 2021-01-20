class Car{
constructor(){
    this.wheels = 4;
    this.type = 'Hatchback'
}
    alertBrand(){
        console.log('Hey');
    }
}
class Ford extends Car{
    constructor(){
        super();    //bring all the values from Car class
        this.windows = 4;
    }
}
const car = new Car();
const ford = new Ford();

console.log(ford.wheels);   //4