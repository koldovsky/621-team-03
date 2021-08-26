(function () {
  let productSlides;
  fetch('products.json') 
   .then( response => response.json() )
   .then( products => {
       productSlides = prepareProductSlides(products);
       showCurrentProductSlide();
   });

  function prepareProductSlides(products) {
    const productSlides = [];
    for (const product of products) {
      productSlides.push(`
          <div class="carousel-item">
          <a href="product.html" class="carousel-image-link"><img src="${product.imgUrl}" class="carousel-img-s-cards" alt="${product.name}"></a>
          <h4 class="s-carousel-text">${product.name}</h4>
          <p class="s-carousel-product-price">${product.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy">Add to cart</button>
          </div>
          `);
    }
    return productSlides;
  }

  let currentSlideIdx = 0;
  function showCurrentProductSlide() {
    if (window.innerWidth < 700) {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML = productSlides[currentSlideIdx];
    } else {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML =
        productSlides[currentSlideIdx] +
        productSlides[currentSlideIdx + 1] +
        productSlides[currentSlideIdx + 2];
    }
  }

  function nextProductSlide() {
    if (window.innerWidth < 700) {
      currentSlideIdx++;
      if (currentSlideIdx >= productSlides.length) currentSlideIdx = 0;
      showCurrentProductSlide();
    } else {
      currentSlideIdx += 3;
      if (currentSlideIdx >= productSlides.length - 3) currentSlideIdx = 0;
      showCurrentProductSlide();
    }
  }

  function previousProductSlide() {
    currentSlideIdx--;
    if (window.innerWidth < 700) {
      if (currentSlideIdx < 0) currentSlideIdx = productSlides.length - 1;
      showCurrentProductSlide();
    } else {
      if (currentSlideIdx <= 3) currentSlideIdx = productSlides.length - 3;
      showCurrentProductSlide();
    }
  }

  setInterval(nextProductSlide, 5000);

  window.addEventListener("resize", showCurrentProductSlide);

  document
    .querySelector(".move-slide-right")
    .addEventListener("click", nextProductSlide);

  document
    .querySelector(".move-slide-left")
    .addEventListener("click", previousProductSlide);
})();
