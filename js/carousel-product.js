class ProductList {
  constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector(".carousel-inner");
      this.productService = new ProductsService();
      this.productService
        .getProducts()
        .then(async () => {
          await this.prepareProductSlides();
          this.showCurrentProductSlide();
          this.startSlideShow();
          this.addEventListeners(); 
        })       
  }

  async prepareProductSlides() {
    let productSlides = [];
    const products = await this.productService.getProducts();
    products.forEach((product) => {
      productSlides.push(`
          <div class="carousel-item-s">
          <a href="product.html" class="carousel-image-link"><img src="${product.imgUrl}" class="carousel-img-s-cards" alt="${product.name}"></a>
          <h4 class="s-carousel-text">${product.name}</h4>
          <p class="s-carousel-product-price">${product.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy" data-id="${product.id}">Add to cart</button>
          </div>
          `); 
    });
    this.productSlides = productSlides;
  }

  showCurrentProductSlide() {
    let currentSlideIdx = 0;
    if (window.innerWidth < 700) {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML = this.productSlides[currentSlideIdx];
    } else {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML =
        (this.productSlides[currentSlideIdx]) +
        (this.productSlides[currentSlideIdx + 1]) +
        (this.productSlides[currentSlideIdx + 2]);
    }
  }

  async nextProductSlide() {
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

  async previousProductSlide() {
    currentSlideIdx--;
    if (window.innerWidth < 700) {
      if (currentSlideIdx < 0) currentSlideIdx = productSlides.length - 1;
      showCurrentProductSlide();
    } else {
      if (currentSlideIdx <= 3) currentSlideIdx = productSlides.length - 3;
      showCurrentProductSlide();
    }
  }

  startSlideShow() {
    setInterval(this.nextProductSlide, 5000);
  }

  async addEventListeners() {

    window.addEventListener("resize", () => this.showCurrentProductSlide());
    
    document
        .querySelectorAll('.button-buy')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );

    document
      .querySelector(".move-slide-right")
      .addEventListener("click", () => this.nextProductSlide());

    document
      .querySelector(".move-slide-left")
      .addEventListener("click", () => this.previousProductSlide);
  }

  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Product added to cart');
  }

}  
