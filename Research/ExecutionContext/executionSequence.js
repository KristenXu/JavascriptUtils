/**
 * Created by chainn on 2017/12/7.
 */
//eg1:
var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo(); // foo2

//eg2:

function foo2() {

    console.log('foo1');

}

foo2();  // foo2

function foo2() {

    console.log('foo2');

}

foo2(); // foo2