(function() {
    const furnitureThingsJson = `[
      {
          "id": "001",
          "name": "Kitchen"
          "price": "4000.00"
          "imgUrl": "img/kitchen.jpg"
  
      },
      {
          "id": "002",
          "name": "Lights"
          "price": "320.00"
          "imgUrl": "img/loftlights.jpg"
      },
      {
          "id": "003",
          "name": "Black Chair"
          "price": "240.00"
          "imgUrl": "img/chair.jpg"
  
      },
      {
        "id": "004",
        "name": "Future Bed"
        "price": "1300.00"
        "imgUrl": "img/futurebed.jpg"

    },
    {
        "id": "005",
        "name": "Table"
        "price": "325.00"
        "imgUrl": "img/table.jpg"

    },
    {
        "id": "006",
        "name": "American Bed"
        "price": "400.00"
        "imgUrl": "img/americanbed.jpg"

    },
    {
        "id": "007",
        "name": "Sideboard Table"
        "price": "270.00"
        "imgUrl": "img/tablesb.jpg"

    },
  ]`;

    const furnitureThings = JSON.parse(furnitureThingsJson);

    let furnitureThingsHtml = [];

    function showFurnitureThings(furnitureThings) {
        const allFurnitureThings = [...furnitureThings];
        for (const furnitureThing of allFurnitureThings) {
            furnitureThingsHtml.push(`
          <div class="carousel-item">
          <a class="carousel-image-link"><img src="${furnitureThings.imgUrl}" class="carousel-img-s-cards" alt="${furnitureThings.name}"></a>
          <h4 class="s-carousel-text">${furnitureThings.name}</h4>
          <p class="s-carousel-product-price">${furnitureThings.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy">Add to cart</button>
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
        .querySelector(".move-slide-right")
        .addEventListener("click", nextThingSlide);

    document
        .querySelector(".move-slide-left")
        .addEventListener("click", previousThingSlide);
})();