window.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../Partials/Navbar.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // insert at the top of the body
        document.body.insertAdjacentHTML('afterbegin', xhr.responseText);

        // optional: set active link based on page
        const current = location.pathname.split("/").pop();
        document.querySelectorAll('nav a').forEach(link => {
          if (link.getAttribute('href') === current) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      } else {
        console.error("Failed to load navbar:", xhr.statusText);
      }
    }
  };
  xhr.send();
});
