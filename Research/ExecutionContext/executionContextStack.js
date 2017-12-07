/**
 * Created by chainn on 2017/12/7.
 */
//eg1:
function fun3() {
    console.log('fun3')
}

function fun2() {
    console.log('fun2')
    fun3();
}

function fun1() {
    console.log('fun1')
    fun2();
}

fun1();