/**
 * Created by chainn on 2017/12/5.
 */

//shallow copy
function object(o) {
    function F() {}
    F.prototype = o;
    return new F()
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = object(person);
//var anotherPerson = Object.create(person)

anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
