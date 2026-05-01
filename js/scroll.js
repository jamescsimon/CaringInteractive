var scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
