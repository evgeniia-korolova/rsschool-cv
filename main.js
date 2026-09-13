document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const hamSvg = document.querySelector('.ham');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const body = document.body;


    const toggleMenu = () => {
        const isOpen = menu.classList.toggle('menu-open');
        hamSvg.classList.toggle('active-ham', isOpen);

        body.style.overflow = isOpen ? 'hidden' : '';

        burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };


    burgerBtn.addEventListener('click', toggleMenu);

    // Автоматически закрываем меню при клике на любой пункт (чтобы экран скроллился к секции без открытой плашки)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuLinks.forEach(item => item.classList.remove('link-active'));
          link.classList.add('link-active');
            if (menu.classList.contains('menu-open')) {
                toggleMenu();
            }
        });
    });
});