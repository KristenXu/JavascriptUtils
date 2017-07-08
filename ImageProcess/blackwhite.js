function blackWhite() {
    var imgData = ctx.getImageData(10, 10, 31, 30);
    var data = imgData.data;
    var length = data.length;
    for(var i = 0; i < length; i += 4){
        var grey = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = data[i + 1] = data[i + 2] = grey;
    }
    ctx.putImageData(imgData, 50, 10);
}