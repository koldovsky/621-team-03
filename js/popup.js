(function() {
    const bodyScrollLock = document.querySelector('.hidden-scroll');
    const popupButtonYes = document.querySelector('.popup-close');
    const popupWrapper = document.querySelector('.popup')
    function popupButtonYesClick(){
        popupWrapper.style.display = 'none';
        bodyScrollLock.style.overflow = 'auto';
    }
    popupButtonYes.addEventListener('click', popupButtonYesClick);
})();