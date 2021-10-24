
// selector display change
function showGlazeSelection() {
    var ele = document.getElementsByName('glazing');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("glazing-result").innerHTML
                        = "glazing - "+ele[i].value;
            }
}

function showQuantitySelection() {
    var ele = document.getElementsByName('count');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("quantity-result").innerHTML
                        = "quantity - "+ele[i].value;
                    
                document.getElementById("addButton").innerHTML
                        = "Add to cart - "+ele[i].value;
            }
}

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
