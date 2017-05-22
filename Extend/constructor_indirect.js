function extend(Child, Parent) {

    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}
function Audi(name,color){
    this.name = name;
    this.color = color;
}


function Car(){
}
Car.prototype.category = "汽车"

extend(Audi, Car);
var audi1 = new Audi("A6","白色");
console.log(audi1);
console.log(audi1.category); // 汽车
console.log(Car.prototype.constructor); // Car