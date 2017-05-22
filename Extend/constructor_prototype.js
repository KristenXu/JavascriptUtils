var Car = require('./car')
function Audi(name,color){
    this.name = name;
    this.color = color;
}
Audi.prototype = new Car();
Audi.prototype.constructor = Audi;
var audi1 = new Audi("A8","黑色");
console.log(audi1.category); //'汽车'