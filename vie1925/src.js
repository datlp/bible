document.addEventListener('DOMContentLoaded', function () {
  const navActiveElement = document.querySelector(
    `[href*="${window.location.pathname.split('/').pop()}"]`
  );
  navActiveElement.scrollIntoView();
  navActiveElement.classList.add('active');
});
