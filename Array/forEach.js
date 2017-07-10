var forEach = Array.prototype.forEach
    ? function(){
        var args = Array.prototype.slice.call(arguments, 1);
        return Array.prototype.forEach.apply(arguments[0], args);
    }
    : function(arr, fun /*, thisp*/) {
        var len = arr.length;
        if (typeof fun != "function") {
            throw new TypeError();
        }
        var thisp = arguments[2];
        for (var i = 0; i < len; i++) {
            if (i in arr) {
                fun.call(thisp, arr[i], i, arr);
            }
        }
    };