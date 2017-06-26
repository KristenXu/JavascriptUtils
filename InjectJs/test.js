var initFrame = function () {
    var _document  = document.getElementById("_iframe").contentWindow.document
    loadFrame(_document)
}
var loadFrame = function (document) {
    console.log('loaded script')
}