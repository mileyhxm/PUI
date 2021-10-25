function showGlazeSelection() {
    var ele = document.getElementsByName('glazing');

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
        document.getElementById("glazing-result").innerHTML = "glazing - "+ele[i].value;
        }
    }
}

function showQuantitySelection() {
    var ele = document.getElementsByName('count');

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            document.getElementById("quantity-result").innerHTML = "quantity - "+ele[i].value;
        
            if(ele[i].value === "1 ct") {
                document.getElementById("addButton").innerHTML = "Add to cart - $5";
            }
            else if(ele[i].value === "3 ct") {
                document.getElementById("addButton").innerHTML = "Add to cart - $15";
            } else if(ele[i].value === "6 ct") {
                document.getElementById("addButton").innerHTML = "Add to cart - $30";
            } else {
                document.getElementById("addButton").innerHTML = "Add to cart - $60";
            }

        }
    }         
}

// cart message begins

function closeCartMessage(){
    document.getElementById("cart-message").style.display="none";
};

function addCartMessage() {
    message = document.getElementById("cart-message");
    message.style.display = "block";

    window.setTimeout("closeCartMessage();", 3000);
}



// cart message ends

var cartItems = {
    count:0,
    total:0,
    items: []
}

let carts = document.getElementsByClassName('add-cart');

console.log(carts);

for (let i=0; i < carts.length; i++) {
    console.log("my loop");
    carts[i].addEventListener('click',() => {
        cartNumbers();
    })
    console.log(carts.length);
}

function onloadCartNumbers() {
    let productNumbers = sessionStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementById('cart-count').innerHTML = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = sessionStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    console.log(productNumbers);

    if (productNumbers) {
        sessionStorage.setItem('cartNumbers', productNumbers +1 );
        document.getElementById('cart-count').innerHTML = productNumbers + 1;
    } else {
        sessionStorage.setItem('cartNumbers', 1);
        document.getElementById('cart-count').innerHTML = 1;
    }

    
}

onloadCartNumbers();