'use strict';

let n = process.env.N || 50;

console.log('process $', process.pid);
console.log('fibonacci recursive version with n = ', n);
let count = 0;
function fibonacci(n) {
    count++;
    //console.log(count);
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
fibonacci(n);
console.log('process memory usage', process.memoryUsage());
console.log('final count', count);
