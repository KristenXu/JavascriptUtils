var indexOf = Array.prototype.indexOf
    ? function(){
        var args = Array.prototype.slice.call(arguments, 1);
        return Array.prototype.indexOf.apply(arguments[0], args);
    }
    : function (arr, obj, fromIndex) {

        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, arr.length + fromIndex);
        }
        for (var i = fromIndex; i < arr.length; i++) {
            if (arr[i] === obj) {
                return i;
            }
        }
        return -1;
    }
