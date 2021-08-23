(function() {

    const slideItems = [
        '<img src="img/kitchen.jpg" alt="Loft Kitchen"',
        '<img src="img/chair.jpg" alt="Black Chair"',
        '<img src="img/futurebed.jpg" alt="Future Bed"',
        '<img src="img/loftlights.jpg" alt="Lights"',
        '<img src="img/table.jpg" alt="Table"',
        '<img src="img/americanbed.jpg" alt="American Bed"',
        '<img src="img/tablesb.jpg" alt="Sideboard tables"'
    ];

    let currentItemIdx = 0;

    function showCurrentItemSlide() {
        const carouselContainer = document.querySelector('.carousel-items .slide')
        carouselContainer.innerHTML = slides[currentItemIdx];
    }

    function nextSlide() {
        currentItemIdx++;
        if (currentItemIdx >= slideItems.length) currentItemIdx = 0;
        showCurrentItemSlide();
    }

    setInterval(nextSlide, 7000);
    showCurrentItemSlide()


})();