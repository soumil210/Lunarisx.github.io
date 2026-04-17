// js/marquee.js

// Fetch the central logo marquee HTML and insert it above the footer
fetch('Partials/logo-marquee.html')
  .then(res => res.text())
  .then(html => {
    // Wait for the footer to be injected by footer.js
    const timer = setInterval(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.insertAdjacentHTML('beforebegin', html);
        clearInterval(timer);
      }
    }, 50);
  });
