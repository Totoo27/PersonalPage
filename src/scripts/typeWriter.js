const elements = document.querySelectorAll('.typeWriter');
const TOTAL_TIME = 1000 // in miliseconds

elements.forEach(element => {

    const time = calculateTimePerChar(element);
    makeTypeWrittingEffect(element, time);

});

function calculateTimePerChar(element){

    const charAmount = element.textContent.length;
    return TOTAL_TIME / charAmount;

}

function sleep(milis){
    return new Promise(resolve => setTimeout(resolve, milis));
}

async function makeTypeWrittingEffect(element, time){

    const text = element.textContent;
    element.textContent = '';

    for(let i = 0; i < text.length; i++){
        
        await sleep(time);
        element.textContent += text.charAt(i);

    }

}
