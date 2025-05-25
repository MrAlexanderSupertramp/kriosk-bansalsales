document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.custom-slider');

    function nextSlide() {
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = 'translateX(-20%)';
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            slider.appendChild(slider.firstElementChild);
        }, 1000);
    }

    setInterval(nextSlide, 3000);
});