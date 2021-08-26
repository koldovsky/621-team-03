(function () {
  let products;
  fetch('products.json') 
   .then( response => response.json() )
   .then( productsData => {
       products = productsData;
       showProducts(products);
   });

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


  let currentSlideIdx = 0;
  const slidesProducts = [...productsHtml];
  function showCurrentProductSlide() {
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
