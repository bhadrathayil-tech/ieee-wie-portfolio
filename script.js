// Mobile menu toggle functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a navigation link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Contact form interactive feedback submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        formStatus.className = "text-center text-sm font-medium text-emerald-400 block";
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    } else {
        formStatus.textContent = "Please fill in all fields before submitting.";
        formStatus.className = "text-center text-sm font-medium text-rose-400 block";
    }
});