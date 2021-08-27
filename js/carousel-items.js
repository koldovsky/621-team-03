(function() {
    const furnitureThingsJson = `[
        {
            "id": "001",
            "name": "Kitchen",
            "price": "4000.00",
            "imgUrl": "img/kitchen.jpg"
    
        },
        {
            "id": "002",
            "name": "Lights",
            "price": "320.00",
            "imgUrl": "img/loftlights.jpg"
        },
        {
            "id": "003",
            "name": "Black Chair",
            "price": "240.00",
            "imgUrl": "img/chair.jpg"
    
        },
        {
            "id": "004",
            "name": "Future Bed",
            "price": "1300.00",
            "imgUrl": "img/futurebed.jpg"
    
        },
        {
            "id": "005",
            "name": "Table",
            "price": "325.00",
            "imgUrl": "img/table.jpg"
    
        },
        {
            "id": "006",
            "name": "American Bed",
            "price": "400.00",
            "imgUrl": "img/americanbed.jpg"
    
        },
        {
            "id": "007",
            "name": "Sideboard Table",
            "price": "270.00",
            "imgUrl": "img/tablesb.jpg"
    
        }
  ]`;

    const furnitureThings = JSON.parse(furnitureThingsJson);

    let furnitureThingsHtml = [];

    function showFurnitureThings(furnitureThings) {
        const allFurnitureThings = [...furnitureThings];
        for (const thing of allFurnitureThings) {
            furnitureThingsHtml.push(`
          <div class="carousel-items">
          <a href="itemlist.html" class="carousel-image-thing"><img src="${thing.imgUrl}" class="carousel-img-s-card" alt="${thing.name}"></a>
          <h4 class="s-carousel-text text-positioning">${thing.name}</h4>
          <p class="s-carousel-product-price price-positioning">${thing.price} USD</p>
          <button name="add-to-cart-button" id="button-positioning" class="button button-buy">Add to cart</button>
          </div>
          `);
        }
        return furnitureThingsHtml;
    }
    showFurnitureThings(furnitureThings);

    const slidesThings = [...furnitureThingsHtml];
    let currentThingSlideIdx = 0;

    function showCurrentThingSlide() {
        const slideThingContainer = document.querySelector(
            ".furniture-items-carousel"
        );
        slideThingContainer.innerHTML = slidesThings[currentThingSlideIdx];
    }

    function nextThingSlide() {
        currentThingSlideIdx++;
        if (currentThingSlideIdx >= slidesThings.length)
            currentThingSlideIdx = 0;
        showCurrentThingSlide();
    }

    function previousThingSlide() {
        currentThingSlideIdx--;
        if (currentThingSlideIdx < 0)
            currentThingSlideIdx = slidesThings.length - 1;
        showCurrentThingSlide();
    }
    setInterval(nextThingSlide, 7000);
    showCurrentThingSlide();

    document
        .querySelector(".carousel-items .next-click")
        .addEventListener("click", nextThingSlide);

    document
        .querySelector(".carousel-items .previous-click")
        .addEventListener("click", previousThingSlide);
})();