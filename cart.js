const cart = [];
const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');

const products = [
    {id:1, name:"Product 1", price: 20.00},
    {id: 2, name: "Product 2" ,price: 30.00},
    {id: 3, name: "Product 3" , price:25.00}
];
// Function to update the cart display 
function updateCart() {
    //clear the cart dispaly
    cartItems.innerHTML ="" ;
    let total= 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}
        <button class ="remove-item" data-id= "${item.id}">Remove</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPriceElem.innerText = `Total: $${total.toFixed(2)}`;
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}
// function to add product in the cart
function addToCart (productId) {
    const product = products.find(p => p.id === productId);
    if(product) {
        cart.push(product);
        updateCart();
    }
}
// function to remove the product from the cart
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if(index != -1) {
        cart.splice(index,1);
        updateCart();
    }
}
// function ot clear cart
document.getElementById("clear-cart").addEventListener("click", () => {
    cart.length = 0;
    updateCart();
});
//attch event listener to "Add to cart " buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.parentElement.getAttribute('data-id'));
        addToCart(productId);
    });
});