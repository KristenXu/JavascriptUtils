var frameDocument = document.getElementById('_iframe').contentDocument;
document.getElementById("_iframe").addEventListener('click', function () {
    console.log('@@@@')
});
(function (document) {
    console.log('loaded script')

})(frameDocument)