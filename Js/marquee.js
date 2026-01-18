// js/marquee.js

// Fetch the central logo marquee HTML and insert it above the footer
fetch('Partials/logo-marquee.html')
  .then(res => res.text())
  .then(html => {
    const footer = document.querySelector('footer') || document.body;
    footer.insertAdjacentHTML('beforebegin', html);
  });
