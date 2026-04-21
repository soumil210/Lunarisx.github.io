window.addEventListener('DOMContentLoaded', () => {
  fetch('Partials/Navbar.html')
    .then(res => res.text())
    .then(html => {
      // insert at the top of the body
      document.body.insertAdjacentHTML('afterbegin', html);

      // optional: set active link based on page
      const current = location.pathname.split("/").pop() || "index.html";
      document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Mobile menu toggle
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('nav-active');
          hamburger.classList.toggle('toggle');
        });
      }
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
