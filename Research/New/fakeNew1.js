/**
 * Created by chainn on 2017/12/15.
 */
function fakeNew1 () {
    var Constructor = [].shift.call(arguments);
    var obj = {};
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj
}

var Student = function (name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.grade = 1;

// var xiaoming = new Student('xiaoming', 8);
var xiaoming = fakeNew1(Student, 'xiaoming', 8);

console.log(xiaoming.name);
console.log(xiaoming.age);
console.log(xiaoming.grade);