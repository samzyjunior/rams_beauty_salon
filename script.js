// HERO text animation
function animateHeroText() {
  document.getElementById('text1').style.opacity = 0;
  document.getElementById('text2').style.opacity = 0;
  
  setTimeout(() => { document.getElementById('text1').style.opacity = 1; }, 0);
  setTimeout(() => { document.getElementById('text2').style.opacity = 1; }, 2000);
}

// Newsletter popup
window.addEventListener('scroll', function() {
  const services = document.getElementById('services');
  const popup = document.getElementById('popup');
  const rect = services.getBoundingClientRect();
  
  if (rect.top <= window.innerHeight && popup.style.display !== 'block') {
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 5000);
  }
});

// WhatsApp auto-send with input validation
document.querySelector(".services form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = this.querySelector('input[placeholder="Name"]').value.trim();
  const location = this.querySelector('input[placeholder="Location"]').value.trim();
  const service = this.querySelector('select').value;
  const details = this.querySelector('textarea').value.trim();
  
  if (!name || !location || service === "Choose Service" || !details) {
    alert("Please fill in all fields before submitting.");
    return;
  }
  
  const phone = "233271977814";
  const message = `Hello, I want to book a service.%0AName: ${name}%0ALocation: ${location}%0AService: ${service}%0ADetails: ${details}`;
  
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});

// Start HERO text animation
animateHeroText();