'use strict';

let N = process.env.N || 50;
let count = 0;

let fibonacci = (function() {
    let memo = {};
    function f(n) {
        count++;
        let value;
        if (n in memo) {
            value = memo[n];
        } else {
            if (n == 0 || n == 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n - 2);
            }
            memo[n] = value;
        }
    }
    return f;
})();

fibonacci(N);

console.log('process memory usage', process.memoryUsage());
console.log('final count', count);
