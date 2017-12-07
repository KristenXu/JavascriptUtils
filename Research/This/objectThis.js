/**
 * Created by chainn on 2017/12/7.
 */

var v = 2;
var a = {
    v: 1,
    ac: function () {
        console.log(this.v)
    }
}

var b = a.ac;
b()//2