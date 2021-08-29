class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector(".products-container");
    this.productService = new ProductsService();
    this.productService.getProducts().then(async () => {
      await this.prepareProducts();
      this.addBuyListeners();
    });
  }

  async prepareProducts() {
    let productListDomStr = "";
    const products = await this.productService.getProducts();
    products.forEach((product) => {
      productListDomStr += `
          <div class="s-products-list">
          <a href="../product.html" class="s-product-image-link"><img src="${product.imgUrl}" class="s-product-img-card" alt="${product.name}"></a>
          <h4 class="s-product-title">${product.name}</h4>
          <p class="s-product-price">${product.price} USD</p>
          <button name="add-to-cart-button" class="button button-buy shop-btn" data-bs-target="#modal-cart" data-id="${product.id}">Add to cart</button>
          </div>
          `;
    });
    this.container.innerHTML = productListDomStr;
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

  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert("Product added to cart");
  }
}
