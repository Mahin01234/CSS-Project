// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu after clicking
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Handle Form Submission
function submitForm(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent successfully.');
  e.target.reset();
}