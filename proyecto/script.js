let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Cambiar automáticamente cada 4 segundos
setInterval(nextSlide, 4000);

// Mostrar la primera imagen al cargar
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
});