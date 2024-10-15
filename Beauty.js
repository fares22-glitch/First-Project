document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("cart1").onclick = ()=>{
        window.location.href = "Cart.html"
    }
});



const products = [
    { id: 1, price: 30.6, quantity: 0, total: 0 },
    { id: 2, price: 39.80, quantity: 0, total: 0 },
    { id: 3, price: 40.90, quantity: 0, total: 0 },
    { id: 4, price: 50.50, quantity: 0, total: 0 },
];

let count = 0;


function updateCart(productIndex) {
    count++;
    products[productIndex].quantity++;
    products[productIndex].total = products[productIndex].price * products[productIndex].quantity;

    window.localStorage.setItem(`product${productIndex + 1}Price`, products[productIndex].price);
    window.localStorage.setItem(`product${productIndex + 1}Q`, products[productIndex].quantity);
    window.localStorage.setItem(`product${productIndex + 1}T`, products[productIndex].total);
    window.localStorage.setItem('count', count);

    document.querySelector(".item").textContent = count;

}

document.addEventListener("DOMContentLoaded", function() {
    products.forEach((product, index) => {
        document.getElementById(`add${index + 1}`).onclick = function() {
            updateCart(index);
        };
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("add1").onclick = function() {
//         count++;
//         product1Q++;
//         product1T=product1Price * product1Q;
//         window.localStorage.product1Price=product1Price;
//         window.localStorage.product1Q=product1Q;
//         window.localStorage.product1T=product1T;

//         window.localStorage.count=count;
//         document.querySelector(".item").textContent = `(${localStorage.count})`;

//         console.log(`${count}`);
//     };
// });
