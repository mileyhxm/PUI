const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue : [];
const addButton = document.getElementById('addButton');

let cartContainer = document.getElementById('cart-container');
const template = document.getElementById('cart-item-template');
const removeButton = document.querySelector('.close-button');

//constructor for new product
function Product(name, glazing, quantity) {
    this.name = name;
    this.glazing = glazing;
    this.quantity = quantity;
    this.inCart = false;

    if (quantity == "1 ct") {
        this.price = 5;
    } else if (quantity == "3 ct") {
        this.price = 15;
    } else if (quantity == "6 ct") {
        this.price = 30;
    } else {
        this.price = 60;
    } 
}

//add product to cart
function addToCart(productName, productGlaze, productQuantity) {
    const item = new Product(productName, productGlaze, productQuantity);
    cart.push(item);
    localStorage.setItem('savedCart', JSON.stringify(cart));
    console.log("added");
}

//remove item
function removeItem(btn) {
    const parent = btn.parentNode;

    const template = parent.parentElement;

    const i = Array.from(template.parentNode.children).indexOf(template);
    // console.log(cartContainer);
    // console.log(cartContainer.children[i]);
    cartContainer.removeChild(cartContainer.children[i]);

    console.log(cart[i-1].price);

    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    newPrice = totalPrice - cart[i-1].price; 
    localStorage.setItem("totalPrice", newPrice);

    document.getElementById("total").innerText = newPrice + 8;
    document.getElementById("subtotal").innerText = newPrice;

    cart.splice(i-1,1);
    localStorage.setItem('savedCart', JSON.stringify(cart));

    showEmpty();
    // console.log(cart.length);
}

//load cart page
function loadCart() {
    showEmpty();

    if ( cart.length > 0 ) {
        for (i = 0; i < cart.length; i ++) {
            showProductInCart(cart[i]);
        }

    }
}

function updateCart() {
    // const productName = 'Original';
    const productName = document.getElementById('product-name').innerText;
    console.log(productName);

    glazing = document.getElementsByName('glazing');
    count = document.getElementsByName('count');
    for(i = 0; i < glazing.length; i++) {
        if(glazing[i].checked) {
            var productGlaze = glazing[i].value;
            // console.log(productGlaze);
        }
    }
    
    for(i = 0; i < count.length; i++) {
        if(count[i].checked) {
            var productQuantity = count[i].value;
            // console.log(productQuantity);
        }
    }
    
    addToCart(productName, productGlaze, productQuantity);
    // console.log(cart);
    updatePrice(cart[cart.length-1]);
    console.log(cart.length);
    
}

//load products in cart
function showProductInCart(product) {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.in-cart-name').innerText = product.name;
    clone.querySelector('.in-cart-glaze').innerText = product.glazing;
    clone.querySelector('.in-cart-count').innerText = product.quantity;
    clone.querySelector('.item-total').innerText = product.price;
    
    console.log(clone.querySelector('#item-image'));

    if (product.name == "Original" || product.name == "Original (Gluten-Free)") {
        clone.querySelector('#item-image').src = "assets/original.png";
    } else if (product.name == "Pumpkin Spice") {
        clone.querySelector('#item-image').src = "assets/pumpkin.png";
    } else if (product.name == "Walnut" || product.name == "Caramel Pecan") {
        clone.querySelector('#item-image').src = "assets/walnut.png";
    } else {
        clone.querySelector('#item-image').src = "assets/blackberry.png";
    }

    cartContainer.appendChild(clone);

    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));

    document.getElementById("total").innerText = totalPrice + 8;
    document.getElementById("subtotal").innerText = totalPrice;

    console.log(totalPrice);
}

function updatePrice(product) {
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    const newTotal = totalPrice + product.price;
    console.log("total price;"+ totalPrice);

    localStorage.setItem("totalPrice", newTotal);
}

//show empty cart if no item has been added
function showEmpty() {
    const emptyMessage = document.getElementById('main-empty');
    const regCart = document.getElementById('main');
    if (cart.length == 0) {
        emptyMessage.style.display = "flex";
        regCart.style.display = "none";

        localStorage.setItem('totalPrice',0);

    } else {
        emptyMessage.style.display = "none";
        regCart.style.display = "flex";
    }
}