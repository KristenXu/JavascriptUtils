/**
 * Created by chainn on 2017/12/13.
 */

Function.prototype.bind2 = function (bindContext) {

    var self = this;
    var bindArgs = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var args = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : bindContext, bindArgs.concat(args));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}