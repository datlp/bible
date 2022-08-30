window.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll([`[data-usfm="${this.location.hash}"]`])
    .forEach((node, index) => {
      console.log(node);
      node.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center',
      });
      node.style.color = 'blue';
      setTimeout(() => {
        node.style.color = 'initial';
      }, 5000);
    });

  const navActiveElement = document.querySelector(
    `[href*="${window.location.pathname.split('/').pop()}"]`
  );
  navActiveElement &&
    navActiveElement.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
  navActiveElement && navActiveElement.classList.add('active');

  document
    .querySelectorAll('[data-level="verse"][data-usfm]')
    .forEach((node) => {
      node.outerHTML = `<a href="../${
        location.pathname.match('vie1925') ? 'kjv' : 'vie1925'
      }/${node.dataset.usfm.toLowerCase().replace(/[.].*/, '.html')}#${
        node.dataset.usfm
      }">${node.outerHTML}</a>`;
    });
});
