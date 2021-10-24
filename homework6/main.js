
// selector display changes
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

function cartCount() {
    count = document.getElementById("cart-count");
    count.innerHTML = "(" + parseInt()
}

// cart message ends


var cartCount = document.getElementById("cart-count");
var storageCartCount = localStorage.setItem("cartCount","");

