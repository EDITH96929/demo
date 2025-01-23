


let products = [];

function fetchData() {
    fetch('https://dummyjson.com/products').then((val) => {
        return val.json();
    }).then((res) => {
        //console.log(res.products);
        products = res.products;
        console.log(products);
        localStorage.setItem("products", JSON.stringify(products));
        fetchProduct(products); // Initial product fetch
    });
}

function fetchProduct(filteredProducts) {
    //console.log(filteredProducts);
    let product = "";
    filteredProducts.map((v) => {
        product += `<main>
        <div id="root">
            <img src=${v.thumbnail}>
            <p id="title">${v.title}</p>
            <div id="rating"><span id="rating-box">${v.rating.toFixed(1)}</span>
            <div id="pricebox">
                <div id="price"><strong>Price $ </strong>${v.price}</div>
                <div>
                    <button id="view" onclick="viewMore(${v.id})">Viewmore</button>
                </div>
            </div>
        </main>`;
    });
    document.getElementById("containerBox").innerHTML = product;
}

document.getElementById("searchProduct")
    .addEventListener("input", function searchItem(event) {
        let searchTerm = event.target.value.toLowerCase();
        console.log(searchTerm);

        let filterProd = products.filter((product) => {
            return product.title.toLowerCase().includes(searchTerm) || 
                   product.category.toLowerCase().includes(searchTerm);
        });
        fetchProduct(filterProd); // Now it works with filtered products
    });

function viewMore(productId) {
    localStorage.setItem("selectedProductId", productId);
    //console.log(productId);
    window.location.href = "./Viewmore.html";
}

fetchData();
