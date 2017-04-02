function asyncLoad(url, callback){
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;
    /* 
     ** script标签的onload和onreadystatechange事件
     ** IE6/7/8支持onreadystatechange事件
     ** IE9/10支持onreadystatechange和onload事件
     ** Firefox/Chrome/Opera支持onload事件
     */

    // 判断IE8及以下浏览器 
    var isIE = !-[1,];
    if(isIE){
        oScript.onreadystatechange = function(){
            if(this.readyState == 'loaded' || this.readyState == 'complete'){
                callback();
            }
        }
    } else {
        // IE9及以上浏览器，Firefox，Chrome，Opera
        oScript.onload = function(){
            callback();
        }
    }
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(oScript, s);
}