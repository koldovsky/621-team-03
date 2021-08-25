(function () {

    function showBurgerControls() {
        const menuTop = document.querySelector('.menu-top');
        const burgerIcon = document.querySelector('.openMenu');
        if (window.innerWidth < 700) {
            burgerIcon.style.display = 'block';
            menuTop.style.display = 'none';
        } else {
            burgerIcon.style.display = 'none';
            menuTop.style.display = 'block';
        }
    }
    window.addEventListener('resize', showBurgerControls);
    showBurgerControls();
})();

const mainMenu = document.querySelector('.nav_menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


