(function () {
  const productsJson = `[
        {
            "id": "001",
            "name": "Grey sofa",
            "price": 1200.00,
            "imgUrl": "img/sofa-1.png"
        },
        {
            "id": "002",
            "name": "Dark grey sofa",
            "price": 1350.00,
            "imgUrl": "img/sofa-2.png"
        },
        {
            "id": "003",
            "name": "Dark grey sofa",
            "price": 1350.00,
            "imgUrl": "img/sofa-3.png"
        },
        {
            "id": "004",
            "name": "Black table",
            "price": 230.00,
            "imgUrl": "img/table-1.png"
        },
        {
            "id": "005",
            "name": "Wood table",
            "price": 450.00,
            "imgUrl": "img/table-2.png"
        },
        {
            "id": "006",
            "name": "Wood sideboard",
            "price": 1320.00,
            "imgUrl": "img/sideboard-1.png"
        },
        {
            "id": "007",
            "name": "Grey sideboard",
            "price": 1200.00,
            "imgUrl": "img/sideboard-2.png"
        },
        {
            "id": "008",
            "name": "Black sideboard",
            "price": 1200.00,
            "imgUrl": "img/sideboard-3.png"
        },
        {
            "id": "009",
            "name": "Grey beanbag",
            "price": 260.00,
            "imgUrl": "img/beanbag-1.png"
        },
        {
            "id": "010",
            "name": "Fur white beanbag",
            "price": 390.00,
            "imgUrl": "img/beanbag-2.png"
        },
        {
            "id": "011",
            "name": "Dark grey beanbag",
            "price": 380.00,
            "imgUrl": "img/beanbag-3.png"
        }
    ]`;

  const products = JSON.parse(productsJson);

  let productsHtml = [];
  function showProducts(products) {
    const allProducts = [...products];
    for (const product of allProducts) {
      productsHtml.push(`
          <div class="carousel-item">
          <a href="product.html" class="carousel-image-link"><img src="${product.imgUrl}" class="carousel-img-s-cards" alt="${product.name}"></a>
          <h4 class="s-carousel-text">${product.name}</h4>
          <p class="s-carousel-product-price">${product.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy">Add to cart</button>
          </div>
          `);
    }
    return productsHtml;
  }
  showProducts(products);

  const slidesProducts = [...productsHtml];
  let currentSlideIdx = 0;
  function showCurrentProductSlide() {
    console.log(window.innerWidth);
    if (window.innerWidth < 700) {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML = slidesProducts[currentSlideIdx];
    } else {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML =
        slidesProducts[currentSlideIdx] +
        slidesProducts[currentSlideIdx + 1] +
        slidesProducts[currentSlideIdx + 2];
    }
  }

  function nextProductSlide() {
    if (window.innerWidth < 700) {
      currentSlideIdx++;
      if (currentSlideIdx >= slidesProducts.length) currentSlideIdx = 0;
      showCurrentProductSlide();
    } else {
      currentSlideIdx += 3;
      if (currentSlideIdx >= slidesProducts.length - 3) currentSlideIdx = 0;
      showCurrentProductSlide();
    }
  }

  function previousProductSlide() {
    currentSlideIdx--;
    if (window.innerWidth < 700) {
      if (currentSlideIdx < 0) currentSlideIdx = slidesProducts.length - 1;
      showCurrentProductSlide();
    } else {
      if (currentSlideIdx <= 3) currentSlideIdx = slidesProducts.length - 3;
      showCurrentProductSlide();
    }
  }

  setInterval(nextProductSlide, 5000);
  showCurrentProductSlide();

  window.addEventListener("resize", showCurrentProductSlide);

  document
    .querySelector(".move-slide-right")
    .addEventListener("click", nextProductSlide);

  document
    .querySelector(".move-slide-left")
    .addEventListener("click", previousProductSlide);
})();
