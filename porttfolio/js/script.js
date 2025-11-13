// footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// simple contact submit (no backend) – prevent page reload and show tiny confirmation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // you can replace this with actual email sending later
    alert('Thanks! Your message was sent (demo).');
    form.reset();
  });
}
