const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue : [];
const addButton = document.getElementById('addButton');
let cartContainer = document.getElementById('cart');

function displayCart() {

    console.log(cart);
    for (i = 0; i < storedValue.length; i++) {
        // console.log(storedValue[i].inCart);

        if ( storedValue[i].inCart == false ) {
        cartContainer.innerHTML +=
        `<div class="cart-item">
            <div class="cart-item-up">
            <img class="item-image" src="assets/original.png" alt="cinnamon roll" width=80> 
            <div class="roll-type">
                <span>Original</span>
                
                <select name="glazing" id="glazing">
                    <option value="none">None</option>
                    <option value="sugar milk">Sugar Milk</option>
                    <option value="vanilla milk">Vanilla Milk</option>
                    <option value="double chocolate">Double Chocolate</option>
                </select>

            </div>
            <button class="close-button" type="button">
            Remove
            </button>
        </div>

        <div class="cart-item-down">
            <hr class="solid">
            <select name="count" id="count">
                <option value="1 ct">1 ct</option>
                <option value="3 ct">3 ct</option>
                <option value="6 ct">6 ct</option>
                <option value="12 ct">12 ct</option>
            </select>

            <div class="right-aligned">
                <span>$5</span>
            </div>
        </div>
        </div>
      `
    let dropdown = document.getElementsByName('count')[i];
    // console.log(storedValue[i].quantity);

    setSelectedIndex(dropdown, storedValue[i].quantity);  
    storedValue[i].inCart = true;
    }
}

    
}

function setSelectedIndex(s, v) {
    for ( var i = 0; i < s.options.length; i++ ) {
        console.log(v);
        console.log(s.options[i]);
        if ( s.options[i].value == v ) {
            // s.options[i].selected = true;
            // console.log(s.options[i].value);
            // console.log(v);
            s.setSelectedIndex = i;
            return;
        }
    }
}