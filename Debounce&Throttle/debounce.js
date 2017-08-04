// debounce函数用来包裹我们的事件
function debounce(fn, delay) {
    // 持久化一个定时器 timer
    var timer = null;
    // 闭包函数可以访问 timer
    return function() {
        // 通过 'this' 和 'arguments'
        // 获得函数的作用域和参数
        var context = this;
        var args = arguments;
        // 如果事件被触发，清除 timer 并重新开始计时
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    }
}

//usage
/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，action 才会执行
 * @param delay   {number}    空闲时间，单位毫秒
 * @param fn {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
function foo() {
    console.log('You are scrolling!');
}

// 在事件触发的两秒后，我们包裹在debounce中的函数才会被触发
var elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));
// 有人形象的把上面说的事件形象的比喻成按压弹簧，debounce就是你的手，你不放手，弹簧就不会弹起来。
/**
 * 强制一个函数在某个连续时间段内只执行一次，哪怕它本来会被调用多次。我们希望在用户停止某个操作一段时间之后才执行相应的监听函数，而不是在用户操作的过程当中，浏览器触发多少次事件，就执行多少次监听函数。

 比如，在某个 3s 的时间段内连续地移动了鼠标，浏览器可能会触发几十（甚至几百）个 mousemove 事件，不使用 debounce 的话，监听函数就要执行这么多次；如果对监听函数使用 100ms 的“去弹跳”，那么浏览器只会执行一次这个监听函数，而且是在第 3.1s 的时候执行的。
 */
