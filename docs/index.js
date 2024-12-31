window.addEventListener('load', function () {
    const button = document.getElementById('open-close');
    const element = document.getElementById('mobile-nav-open');
    button.addEventListener('click', () => {
        element.classList.toggle('mobile-nav');
    });
});
