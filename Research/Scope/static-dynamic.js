/**
 * Created by chainn on 2017/12/7.
 */

//eg1:
var value = 1;

function foo() {
    console.log(value)
}

function bar() {
    var value = 2;
    foo()
}

bar()

//eg2:

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        console.log(scope);
    }
    return f();
}
checkscope();//local scope  JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。

//eg3:

var scope2 = "global scope";
function checkscope2(){
    var scope2 = "local scope";
    function f(){
        console.log(scope2);
    }
    return f();
}
checkscope2();//local scope  JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。


