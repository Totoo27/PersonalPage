
const INTERVAL_TIME_MS = 5000;
const CANTIDAD_SLIDES = 4;


const BUTTONS = document.querySelectorAll('input[name="radio-btn"]');
let counter = 1;

let sliderTimer;
startSliderTimer();

BUTTONS.forEach(button => {

    button.addEventListener('click', () => {

        clearInterval(sliderTimer);
        startSliderTimer();

        const BUTTON_ID = button.getAttribute('id');
        counter = parseInt(BUTTON_ID.replace('radio', ''));

    });

});

function startSliderTimer(){

    sliderTimer = setInterval(function() {

        document.getElementById('radio' + counter).checked = true;

        counter++;

        if (counter > CANTIDAD_SLIDES) {

            counter = 1;

        }

    }, INTERVAL_TIME_MS);

}


