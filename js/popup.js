(function() {
    const popupButtonYes = document.querySelector('.popup-close');
    const popupWrapper = document.querySelector('.popup')
    function popupButtonYesClick(){
        popupWrapper.style.display = popupWrapper.style.display === 'block' ? 'none' : 'block';
    }
    popupButtonYesClick()
    popupButtonYes.addEventListener('click', popupButtonYesClick);
})();