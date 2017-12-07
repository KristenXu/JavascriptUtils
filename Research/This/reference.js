/**
 * Created by chainn on 2017/12/7.
 */
//egg1:
var foo = {
    bar: function () {
        return this;
    }
};

foo.bar() === foo; // foo

//egg2:
function foo2() {
    console.log(this)
}

foo2(); // MemberExpression 是 foo

//egg3:
function foo3() {
    return function() {
        console.log(this)
    }
}

foo3()(); // MemberExpression 是 foo()

//egg4:
var foo4 = {
    bar: function () {
        return this;
    }
}

foo4.bar(); // MemberExpression 是 foo.bar