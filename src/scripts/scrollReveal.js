
window.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.project-card, .scroll-reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
    
        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        } else {
            reveal.style.opacity = "0";
            reveal.style.transform = "translateY(30px)";
        }
    });
    });
    
    // Inicialización de estilos para el efecto scroll
    document.querySelectorAll('.project-card, .scroll-reveal').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.8s ease-out";
    });

});