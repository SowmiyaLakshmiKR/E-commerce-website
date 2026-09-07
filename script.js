let cart = [];
let total = 0;

function addCart(name, price) {
  cart.push({name, price});
  total += price;

  document.getElementById("count").innerText = cart.length;
  showCart();
}

function showCart() {
  let box = document.getElementById("cartItems");
  box.innerHTML = "";

  cart.forEach(item => {
    box.innerHTML += `
      <div class="cart-item">
        ${item.name} - ₹${item.price}
      </div>`;
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  if (cart.length == 0)
    alert("Your cart is empty!");
  else
    alert("Order placed successfully!");
}