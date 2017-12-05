/**
 * Created by chainn on 2017/12/4.
 */

function SuperType(name){
    this.name = name;
    this.age = 10;
    this.courses = []
}

SuperType.prototype.getAge = function () {
    return this.age
};

function SubType(name) {
    SuperType.call(this);
    this.name = name;
    this.weight = 50;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.getWeight = function () {
    return this.weight
}

var subInstance = new SubType('Rose');
var subInstance2 = new SubType('Ben');
subInstance.courses.push('Math', 'English')//[ 'Math', 'English' ]
subInstance2.courses.push('Physics', 'English')//[ 'Physics', 'English' ]

/**
 * SubType {
  name: 'Rose',
  age: 10,
  courses: [ 'Math', 'English' ],
  weight: 50 }
 */

console.log('subInstance', subInstance)

console.log('subInstance.getAge', subInstance.getAge())//10
console.log('subInstance.getWeight', subInstance.getWeight())//50
/**
 * SubType {
  name: 'Ben',
  age: 10,
  courses: [ 'Physics', 'English' ],
  weight: 50 }
 */
console.log('subInstance2', subInstance2)

