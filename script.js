function animateHeroText() {
    const t1 = document.getElementById('text1');
    const t2 = document.getElementById('text2');
    if(t1 && t2) {
        t1.style.opacity = 0;
        t2.style.opacity = 0;
        setTimeout(() => { t1.style.opacity = 1; }, 100);
        setTimeout(() => { t2.style.opacity = 1; }, 2000);
    }
}

const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.addEventListener('scroll', function() {
    var servicesSection = document.getElementById('services');
    var popup = document.getElementById('popup');
    if (servicesSection && popup) {
        var rect = servicesSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && popup.style.display !== 'block') {
            popup.style.display = 'block';
            setTimeout(() => { popup.style.display = 'none'; }, 5000);
        }
    }
    // Re-trigger animation at top
    if (document.querySelector('.hero').getBoundingClientRect().top === 0) {
        animateHeroText();
    }
});

window.onload = animateHeroText;
