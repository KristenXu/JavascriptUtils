function currying(fn) {
    var slice = Array.prototype.slice,
        __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __inargs.concat(__args));
    };
}

//usage:
function tailFactorial(n, total) {
    console.log('n', n)
    console.log('total', total)
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

console.log(factorial(5)) // 120