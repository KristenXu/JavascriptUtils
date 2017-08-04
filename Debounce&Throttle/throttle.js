// throttle函数用来包裹我们的事件
function throttle(fn, delay) {
    //初始化上次事件调用时间
    var last = 0;
    return function(){
        // 通过 'this' 和 'arguments'
        // 获得函数的作用域和参数
        var context = this;
        var args = arguments;
        var curr = +new Date();
        //若时间间隔大于设置的delay ,则再次调用
        if (curr - last > delay){
            fn.apply(context, args);
            last = curr
        }
    }
}

//usage
/**
 * 频率控制 返回函数连续调用时，action 执行频率限定为 1次 / delay
 * @param delay  {number}    延迟时间，单位毫秒
 * @param fn {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
function foo() {
    console.log('You are scrolling!');
}

var elem = document.getElementById('container');
elem.addEventListener('scroll', throttle(foo, 2000));
// 有人形象的把上面说的事件形象的比喻成机关枪的扫射，throttle就是机关枪的扳机，你不放扳机，它就一直扫射。
/**
 * throttle 的概念理解起来更容易，就是固定函数执行的速率，即所谓的“节流”。正常情况下，mousemove 的监听函数可能会每 20ms（假设）执行一次，如果设置 200ms 的“节流”，那么它就会每 200ms 执行一次。比如在 1s 的时间段内，正常的监听函数可能会执行 50（1000/20） 次，“节流” 200ms 后则会执行 5（1000/200） 次。
 */