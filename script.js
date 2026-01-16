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

window.addEventListener('scroll', function() {
    // Original Popup logic: appears when reaching the services section
    var servicesSection = document.getElementById('services');
    var popup = document.getElementById('popup');
    if (servicesSection && popup) {
        var rect = servicesSection.getBoundingClientRect();
        // Triggers when the services section is in view
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && popup.style.display !== 'block') {
            popup.style.display = 'block';
            // Stays for 5 seconds then hides
            setTimeout(() => { popup.style.display = 'none'; }, 5000);
        }
    }

    // Re-animate hero text when the user scrolls back to the very top
    var heroSection = document.querySelector('.hero');
    if (heroSection) {
        var heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
            animateHeroText();
        }
    }
});

// Run the hero animation immediately when the page finishes loading
window.onload = animateHeroText;
