const intervalTime = 200;
const cantidadSlides = 3;

let counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;

    counter++;
    if (counter > cantidadSlides) {
        counter = 1;
    }

}, intervalTime);