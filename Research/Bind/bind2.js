/**
 * Created by chainn on 2017/12/13.
 */

Function.prototype.bind1 = function (bindContext) {

    var self = this;
    var bindArgs = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var args = Array.prototype.slice.call(arguments)
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        let context = this instanceof fBound ? this : bindContext;
        return self.apply(context, bindArgs.concat(args))
    }
    fBound.prototype = this.prototype
    return fBound;

};

var obj = {
    a: 1,
    b: 2
};

function bar(c, d) {
    this.e = 5;
    console.log('this.a', this.a)
    console.log('c', c)
    console.log('d', d)
}
bar.prototype.f = 6
//支持bind的时候传参
var bindBar = bar.bind1(obj, 3)
//支持调用的时候传参

var newObj = new bindBar(4)

console.log('newObj', newObj)

