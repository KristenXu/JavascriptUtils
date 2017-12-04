/**
 * Created by chainn on 2017/12/4.
 */

function SuperType(name) {
    this.name = name
}

function SubType(name) {
    SuperType.call(this, name)
    this.age = 10;
}

var instance = new SubType('intance')

console.log('instance', instance)