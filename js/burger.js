(function () {

    function showBurgerControls() {
        const menuTop = document.querySelector('.menu-top');
        const burgerIcon = document.querySelector('.burger-icon');
        if (window.innerWidth < 700) {
            burgerIcon.style.display = 'block';
            menuTop.style.display = 'none';
        } else {
            burgerIcon.style.display = 'none';
            menuTop.style.display = 'block';
        }
    }
    showBurgerControls();
})();