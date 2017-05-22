var Car = require('./car')
function Lexus(name,color){
    Car.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var lexus1 = new Lexus("LS","白色");
console.log(lexus1.category); // 汽车