(function() {
    const bodyScrollLock = document.querySelector('.hidden-scroll');
    const popupButtonYes = document.querySelector('.popup-close');
    const popupWrapper = document.querySelector('.popup')
    function popupButtonYesClick(){
        // popupWrapper.style.display = popupWrapper.style.display === 'block' ? 'none' : 'block';
        // bodyScrollLock.style.overflow = bodyScrollLock.style.overflow === 'hidden' ? 'auto' : 'hidden';
        popupWrapper.style.display = 'none';
        bodyScrollLock.style.overflow = 'auto';
    }
    //popupButtonYesClick()
    popupButtonYes.addEventListener('click', popupButtonYesClick);
})();