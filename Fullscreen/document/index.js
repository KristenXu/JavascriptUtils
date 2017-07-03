function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.msRequestFullscreen){
        element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}
/**
 * Chrome浏览器会提示“开启全屏模式API只能由用户手势触发”。
 * "Failed to execute 'requestFullScreen' on 'Element': API can only be initiated by a user gesture."
 * 原因是浏览器采用安全的机制， 将这种强制全屏模式意为“恶意行为”， 一切非用户主观意愿带来的变化都是不允许的。

 因此如果你的应用有全屏需求，有两种方案。
 1.页面初始化给用户一个“F11开启全屏” 的提示， 并且在延迟几秒之后消失。
 2.页面设置一个全屏按钮，单击全屏按钮进入全屏模式，并且隐藏按钮（视觉效果最佳）。


 */
document.getElementsByClassName('full-div')[0].addEventListener('click', function () {
    launchFullscreen(document.getElementsByClassName('full-div')[0]);
    var fullscreenElement =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
    console.log('fullscreenElement', fullscreenElement)
})

// exitFullscreen();

document.addEventListener("fullscreenchange", function( event ) {
    if (document.fullscreenElement) {
        console.log('进入全屏');
    } else {
        console.log('退出全屏');
    }
});

document.addEventListener("webkitfullscreenchange", function( event ) {
    console.log('document.fullscreenElement', document.fullscreenElement)
    var fullscreenElement =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
    if (fullscreenElement) {
        console.log('进入全屏');
    } else {
        console.log('退出全屏');
    }
});
