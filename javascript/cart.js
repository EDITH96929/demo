document.addEventListener("DOMContentLoaded", ()=>{
    displayCart()
})

function displayCart(){
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    console.log(cart);

    cartContent.innerHTML=" ";
    let total = 0;
    if(cart.length===0){
        cartContent.innerHTML = `<p class="empty-message">Your cart is empty. Start <span><a href="./Home.html" Shopping >Shopping Here</span><p>`
        totalPrice.innerHTML = "";
    }

    cart.map((product)=>{
        total += product.price;
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-info");
        productDiv.innerHTML = `<main>
        <img src="${product.images[0]}" alt="${product.title}" class="product-image" />
        <div class="product-details">
          <h4>${product.title}</h4>
          <p>Price: $${product.price}</p>
          <button id="remove-btn" data-id="${product.id}">Remove</button>
        </div>
        </main>
        `
        document.getElementById("totalPrice").innerHTML=`<div>Total Price : $${total.toFixed(2)}</div>`

        cartContent.appendChild(productDiv)
    })
}

