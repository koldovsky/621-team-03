(function() {

    const openMenuButton = document.querySelector('.openMenu');
    const closeMenuButton = document.querySelector('.closeMenu');
    const mainMenu = document.querySelector('.header-nav');
    
    openMenuButton.addEventListener('click', showMenu);
    closeMenuButton.addEventListener('click', closeMenu);
    
    function showMenu() {
        openMenuButton.style.display = 'none';
        closeMenuButton.style.display = 'block';
        mainMenu.style.display = 'block';
    }
    
    function closeMenu() {
        openMenuButton.style.display = 'block';
        closeMenuButton.style.display = 'none';
        mainMenu.style.display = 'none';
    }
    
    function showBurgerControls() {
        if (window.innerWidth < 700) {
            openMenuButton.style.display = 'block';
            mainMenu.style.display = 'none';
        } else {
            openMenuButton.style.display = 'none';
            mainMenu.style.display = 'block';
        }
    }
    showBurgerControls();
    window.addEventListener('resize', showBurgerControls);
})();