const REVEALS = document.querySelectorAll('.project-card, .scroll-reveal');
const WINDOW_HEIGHT = window.innerHeight;

REVEALS.forEach(element => {
        
    checkReveal(element);
    initializeTransition(element);
        
});

window.addEventListener('scroll', () => {
    
    REVEALS.forEach(reveal => {

        checkReveal(reveal);

    });

});
    
   

function checkReveal(reveal) {

    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < WINDOW_HEIGHT - revealPoint) {
        reveal.style.opacity = "1";
        reveal.style.transform = "translateY(0)";
    } else {
        reveal.style.opacity = "0";
        reveal.style.transform = "translateY(30px)";
    }

}

   function initializeTransition(element){
       element.style.transition = "all 0.9s ease";
}


