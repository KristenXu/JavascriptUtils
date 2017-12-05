/**
 * Created by chainn on 2017/12/5.
 */
//shallow copy, 存在共享的问题
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
var anotherPerson2 = createAnother(person);
anotherPerson.sayHi(); //"hi"
anotherPerson.friends.push('Ben')
anotherPerson2.friends.push('Rose')

console.log('anotherPerson.friends', anotherPerson.friends)
console.log('anotherPerson2.friends', anotherPerson2.friends)