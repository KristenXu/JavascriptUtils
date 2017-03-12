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
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));