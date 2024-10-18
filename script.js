// Genera partículas animadas en el fondo
function createParticles() {
    const particleContainer = document.querySelector('.search-section');

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Coloca las partículas en posiciones aleatorias
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duración aleatoria
        
        // Añade las partículas al contenedor
        particleContainer.appendChild(particle);
    }
}

// Llama a la función cuando se carga la página
window.onload = createParticles;


document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.product-slider');
    
    sliders.forEach(slider => {
        let currentSlide = 0;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }, 3000); // Cambia cada 3 segundos
    });
});
