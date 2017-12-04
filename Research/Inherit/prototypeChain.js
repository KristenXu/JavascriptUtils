var Plane = require('./plane')
function Car(){
    this.name = 'car';
    this.price = 1000;
    this.carOnly = 'notCarOnly';
    this.colors = ['red', 'yellow', 'blue'];
}

Car.prototype.getName = function () {
    return this.name
};
Car.prototype.getPrice = function () {
    return this.price
};

Car.prototype.city = 'LA'

function Audi() {
    this.name = 'audi';
    this.price = 1200;
}

Audi.prototype = new Car()
//Audi的原型指向了Car的原型，而Car.prototype的constructor属性指向Car，这里手动设回Audi
Audi.prototype.constructor = Audi

Audi.prototype.getName = function () {
    return this.name + ':' + this.price
}

var audiA4 = new Audi()

var audiA4Proto = audiA4.__proto__

var audiPrototypeConstructor = Audi.prototype.constructor

console.log('Audi.prototype.carOnly', Audi.prototype.carOnly)
console.log('Audi.prototype.__proto__ === Car.prototype', Audi.prototype.__proto__ === Car.prototype)
console.log('audiA4Proto', audiA4Proto)
console.log('audiPrototypeConstructor', audiPrototypeConstructor)
console.log('audiA4 constructor', audiA4.constructor === audiPrototypeConstructor)
console.log('audiA4 name', audiA4.getName())
console.log('audiA4 instanceof Car', audiA4 instanceof Car)

console.log('Car instanceof Object', Car instanceof Object)
console.log('Car [[prototype]]', Car.prototype.__proto__)
console.log('Audi [[prototype]]', Audi.prototype.__proto__)

console.log('audiA4 prototype', Object.getPrototypeOf(audiA4))
console.log('audiA4 city', audiA4.city)

audiA4.colors.push('black')
var audiA5 = new Audi();
console.log('audiA5.colors', audiA5.colors)


function SubPlane() {

}

SubPlane.prototype = new Plane()

var subInstance1 = new SubPlane();
subInstance1.colors.push('black')

var subInstance2 = new SubPlane();
console.log('subInstance2.colors', subInstance2.colors)