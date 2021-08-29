class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector(".carousel-inner");
    this.productService = new ProductsService();
    this.productService.getProducts().then(async () => {
      await this.prepareProductSlides();
      this.showCurrentProductSlide();
      this.startSlideShow();
      this.addEventListeners();
    });
  }

  async prepareProductSlides() {
    let productSlides = [];
    let currentSlideIdx = 0;
    const products = await this.productService.getProducts();
    products.forEach((product) => {
      productSlides.push(`
          <div class="carousel-item-s">
          <a href="product.html" class="carousel-image-link"><img src="${product.imgUrl}" class="carousel-img-s-cards" alt="${product.name}"></a>
          <h4 class="s-carousel-text">${product.name}</h4>
          <p class="s-carousel-product-price">${product.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy" data-bs-target="#modal-cart" data-id="${product.id}">Add to cart</button>
          </div>
          `);
    });
    this.productSlides = productSlides;
    this.currentSlideIdx = currentSlideIdx;
  }

  showCurrentProductSlide() {
    if (window.innerWidth < 700) {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML = this.productSlides[this.currentSlideIdx];
    } else {
      let slideContainer = document.querySelector(".carousel-inner");
      slideContainer.innerHTML =
        this.productSlides[this.currentSlideIdx] +
        this.productSlides[this.currentSlideIdx + 1] +
        this.productSlides[this.currentSlideIdx + 2];
    }
    this.addBuyListeners(".carousel-inner .button-buy");
  }

  async nextProductSlide() {
    if (window.innerWidth < 700) {
      this.currentSlideIdx++;
      if (this.currentSlideIdx >= this.productSlides.length)
        this.currentSlideIdx = 0;
      this.showCurrentProductSlide();
    } else {
      this.currentSlideIdx += 3;
      if (this.currentSlideIdx >= this.productSlides.length - 3)
        this.currentSlideIdx = 0;
      this.showCurrentProductSlide();
    }
  }

  async previousProductSlide() {
    this.currentSlideIdx--;
    if (window.innerWidth < 700) {
      if (this.currentSlideIdx < 0)
        this.currentSlideIdx = this.productSlides.length - 1;
      this.showCurrentProductSlide();
    } else {
      if (this.currentSlideIdx <= 3)
        this.currentSlideIdx = this.productSlides.length - 3;
      this.showCurrentProductSlide();
    }
  }

  startSlideShow() {
    setInterval(() => this.nextProductSlide(), 5000);
  }

  addBuyListeners(selector) {
    document
      .querySelectorAll(selector)
      .forEach((button) =>
        button.addEventListener("click", (event) =>
          this.handleProductBuyClick(event)
        )
      );
  }

  async addEventListeners() {
    window.addEventListener("resize", () => this.showCurrentProductSlide());

    document
      .querySelector(".move-slide-right")
      .addEventListener("click", () => this.nextProductSlide());

    document
      .querySelector(".move-slide-left")
      .addEventListener("click", () => this.previousProductSlide());
  }

  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert("Product added to cart");
  }
}
