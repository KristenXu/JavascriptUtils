var superCar = {
    name: '汽车',
    sayName: function () {
        console.log(this.name)
    }
}

var bmw = Object.create(superCar, {
    name: {
        configurable: true,
        enumerable: true,
        value: "BMW",
        writable: true
    }
})

superCar.sayName() //'汽车'
bmw.sayName() //'BMW'

console.log(superCar.hasOwnProperty('sayName')) //true
console.log(superCar.isPrototypeOf(bmw)) //true
console.log(bmw.hasOwnProperty('sayName')) //false