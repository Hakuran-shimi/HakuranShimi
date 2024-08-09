window.addEventListener('load', function () {
    var $button = document.querySelector('.header-site-menu');
    var $menu = document.querySelector('.header-site-menu1');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});
