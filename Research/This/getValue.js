/**
 * Created by chainn on 2017/12/7.
 */
//eg1:
var value = 1;

var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // undefined
//示例4
console.log((false || foo.bar)()); // undefined
//示例5
console.log((foo.bar, foo.bar)()); // undefined



//eg2:
function foo2(){
    getName = function(){
        console.log(1);
    };
    return this
}

function getName(){
    console.log(5);
}
foo2().getName();//1

