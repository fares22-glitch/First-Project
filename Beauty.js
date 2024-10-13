document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("cart1").onclick = ()=>{
        window.location.href = "Cart.html"
    }
});


let product1Price=30.6;
let product1Q=0;
let product1T=0;

let product2Price=39.80;
let product2Q=0;
let product2T=0;

let product3Price=40.90;
let product3Q=0;
let product3T=0;

let product4Price=50.50;
let product4Q=0;
let product4T=0;


let CountCard=0;


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add1").onclick = function() {
        CountCard++;
        product1Q++;
        product1T=product1Price * product1Q;
        window.localStorage.product1Price=product1Price;
        window.localStorage.product1Q=product1Q;
        window.localStorage.product1T=product1T;

        window.localStorage.CountCard=CountCard;
        document.querySelector(".item").textContent = `(${localStorage.CountCard})`;

        console.log(`${CountCard}`);
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add2").onclick = function() {
        CountCard++;
        product2Q++;
        product2T=product2Price * product2Q;
        window.localStorage.product2Price=product2Price;
        window.localStorage.product2Q=product2Q;
        window.localStorage.product2T=product2T;

        window.localStorage.CountCard=CountCard;
        document.querySelector(".item").textContent = `(${localStorage.CountCard})`;

        console.log(`${CountCard}`);
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add3").onclick = function() {
        CountCard++;
        product3Q++;
        product3T=product3Price * product3Q;
        window.localStorage.product3Price=product3Price;
        window.localStorage.product3Q=product3Q;
        window.localStorage.product3T=product3T;

        window.localStorage.CountCard=CountCard;
        document.querySelector(".item").textContent = `(${localStorage.CountCard})`;

        console.log(`${CountCard}`);
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add4").onclick = function() {
        CountCard++;
        product4Q++;
        product4T=product4Price * product4Q;
        window.localStorage.product4Price=product4Price;
        window.localStorage.product4Q=product4Q;
        window.localStorage.product4T=product4T;

        window.localStorage.CountCard=CountCard;
        document.querySelector(".item").textContent = `(${localStorage.CountCard})`;

        console.log(`${CountCard}`);
    };
});