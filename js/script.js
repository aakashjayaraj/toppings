// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Category nav scroll-spy (menu page only)
  const catLinks = document.querySelectorAll('.category-nav a');
  const sections = document.querySelectorAll('.menu-section');
  if (catLinks.length && sections.length) {
    const setActive = () => {
      let current = sections[0].id;
      const offset = 160;
      sections.forEach(sec => {
        if (window.scrollY + offset >= sec.offsetTop) current = sec.id;
      });
      catLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', setActive);
    setActive();
  }
});
