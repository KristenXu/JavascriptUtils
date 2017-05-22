function extend_copy(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }

    c.uber = p;
}
function Car(){
}
Car.prototype.category = "汽车"
function Audi(name,color){
    this.name = name;
    this.color = color;
}
extend_copy(Audi, Car);
var audi1 = new Audi("A4","白色");
console.log(audi1.category); // 汽车