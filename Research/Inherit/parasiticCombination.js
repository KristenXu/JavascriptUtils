/**
 * Created by chainn on 2017/12/5.
 */

function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}

function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    //避免引用类型属性共享的问题
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    alert(this.age);
}
var subInstance = new SubType('Rose');
var subInstance2 = new SubType('Ben');
subInstance.colors.push('black')
subInstance2.colors.push('white')

console.log('subInstance.colors', subInstance.colors)//[ 'red', 'blue', 'green', 'black' ]
console.log('subInstance2.colors', subInstance2.colors)//[ 'red', 'blue', 'green', 'white' ]