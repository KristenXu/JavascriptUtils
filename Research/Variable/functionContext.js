/**
 * Created by chainn on 2017/12/7.
 */

function foo() {
    console.log(a);
    a = 1;
}

foo(); // ???

//第一段会报错：Uncaught ReferenceError: a is not defined。
//这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 活动对象(activation object, AO) 中。

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???


console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;
// 会打印函数，而不是 undefined 。
//这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。

