(function() {
    const furnitureThingsJson = `[
        {
            "id": "001",
            "name": "Kitchen",
            "price": "4000.00",
            "imgUrl": "img/kitchen.jpg",
            "description": "Example of a mid-sized country single-wall brown floor kitchen design in Portland with a farmhouse sink, shaker cabinets, quartz countertops, stainless steel appliances, an island, white backsplash and blue cabinets"
    
        },
        {
            "id": "002",
            "name": "Lights",
            "price": "320.00",
            "imgUrl": "img/loftlights.jpg",
            "description": "Extremely bright battery powered loft light, equivalent to 32W bulb, with highly visible extra long pull string to illuminate dark spaces with ease."
        },
        {
            "id": "003",
            "name": "Black Chair",
            "price": "240.00",
            "imgUrl": "img/chair.jpg",
            "description": "Our vintage-style real leather chair has been ergonomically designed for full relaxation after a busy day."
    
        },
        {
            "id": "004",
            "name": "Future Bed",
            "price": "1300.00",
            "imgUrl": "img/futurebed.jpg",
            "description": "Oriental layouts have a way of adding a touch of elegance to the most basic furniture and their unique designs for cool beds are no exception."
    
        },
        {
            "id": "005",
            "name": "Table",
            "price": "325.00",
            "imgUrl": "img/table.jpg",
            "description": "Wooden table made of oak. The best thing for you living-room."
    
        },
        {
            "id": "006",
            "name": "American Bed",
            "price": "400.00",
            "imgUrl": "img/americanbed.jpg",
            "description": "Big bed in american style.Renew your bedroom with this platform bed. Wood finished the headboard and frame with metal interior frame support."
    
        },
        {
            "id": "007",
            "name": "Sideboard Table",
            "price": "270.00",
            "imgUrl": "img/tablesb.jpg",
            "description": "The perfect functional display piece, this bookmatch styled buffet is the piece you didn’t know you needed. Comprised of mixed materials of silver hardware and durable laminate doors for a two-toned finish with adjustable rubber feet."
    
        }
  ]`;

    const furnitureThings = JSON.parse(furnitureThingsJson);

    let furnitureThingsHtml = [];

    function showFurnitureThings(furnitureThings) {
        const allFurnitureThings = [...furnitureThings];
        for (const thing of allFurnitureThings) {
            furnitureThingsHtml.push(`
          <div class="carousel-items-p">
          <a href="itemlist.html" class="carousel-image-thing"><img src="${thing.imgUrl}" class="carousel-img-s-card" alt="${thing.name}"></a>
          <h3 class="s-carousel-text text-positioning">${thing.name}</h3>
          <p class="general-description">${thing.description}</p>
          <button name="shop-now-button" id="button-positioning" class="button-shop">Shop Now</button>
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