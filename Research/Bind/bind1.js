/**
 * Created by chainn on 2017/12/13.
 */

Function.prototype.bind1 = function (bindContext) {

    var self = this;
    var bindArgs = Array.prototype.slice.call(arguments, 1);

    return function () {
        var args = Array.prototype.slice.call(arguments)
        return self.apply(bindContext, bindArgs.concat(args))
    }

};

var obj = {
    a: 1,
    b: 2
};

function sum(c, d) {
    var result = this.a + this.b + c + d;
    console.log('result', result)
    return result
}
//支持bind的时候传参
var sumFoo = sum.bind1(obj, 3)
//支持调用的时候传参
sumFoo(4)