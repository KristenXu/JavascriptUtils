/**
 * Created by chainn on 2017/12/5.
 */

function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}

function createAnother(original) {
    var clone = object(original)
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"