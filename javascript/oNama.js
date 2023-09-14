var imgNiz = [
    "css/ja/Uros.jpg"
]
var tijanaNiz = [
    "css/ja/tijana1.jpg",
    "css/ja/tijana2.jpg",
    "css/ja/tijana3.jpg"
]
var matejaNiz = [
    "css/ja/mateja1.jpg",
    "css/ja/mateja2.jpg"
]
var i= 0;
function slideshow() {
    document.getElementById("ja").src=imgNiz[0];
    document.getElementById("tijana").src = tijanaNiz[i];
    document.getElementById("mateja").src = matejaNiz[i];
    if( i<tijanaNiz.length-1 && i<matejaNiz.length-1) {
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideshow()",2000);
    }
window.onload = slideshow;


