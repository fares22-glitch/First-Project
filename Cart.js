

console.log(` count = ${localStorage.getItem('CountCard')}`);

document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".count").textContent = localStorage.CountCard;
    
});


document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".item").textContent = `(${localStorage.CountCard})`;
    
});



document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".price1").textContent = localStorage.product1Price;
    document.querySelector(".Q1").textContent = localStorage.product1Q;
    document.querySelector(".T1").textContent = Math.round(localStorage.product1T * 100) / 100;


});
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".price2").textContent = localStorage.product2Price;
    document.querySelector(".Q2").textContent = localStorage.product2Q;
    document.querySelector(".T2").textContent = Math.round(localStorage.product2T * 100) / 100;


});
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".price3").textContent = localStorage.product3Price;
    document.querySelector(".Q3").textContent = localStorage.product3Q;
    document.querySelector(".T3").textContent = Math.round(localStorage.product3T * 100) / 100;


});
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".price4").textContent = localStorage.product4Price;
    document.querySelector(".Q4").textContent = localStorage.product4Q;
    document.querySelector(".T4").textContent = Math.round(localStorage.product4T * 100) / 100;



});

let Totaly =+localStorage.product1T + +localStorage.product2T + +localStorage.product3T + +localStorage.product4T;
Totaly= Math.round(Totaly * 100) / 100;
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".totaly").textContent = `Total: $${Totaly}`;

});
console.log(Totaly);