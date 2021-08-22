(function() {
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

    function showProducts(products) {
        const allProducts = [...products];
        let productsHtml = '';
        for (const product of allProducts) {
            productsHtml += `
            <div class="carousel-item">
            <a href="product.html"><img src="${product.imgUrl}" class="carousel-img-s-cards" alt="${product.name}"></a>
            <h5>${product.name}</h5>
            <p>${product.price} USD</p>
            <button name="add-to-cart-button" class="button button-buy">Add to cart</button>
            </div>
            `
        }
        document.querySelector('.carousel-inner').innerHTML = productsHtml;
    }
    showProducts(products)
   
})();