

console.log(` count = ${localStorage.getItem('CountCard')}`);

document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".count").textContent = localStorage.count;
    
});


document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".item").textContent = `(${localStorage.count})`;
    
});



// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".price1").textContent = localStorage.product1Price;
//     document.querySelector(".Q1").textContent = localStorage.product1Q;
//     document.querySelector(".T1").textContent = Math.round(localStorage.product1T * 100) / 100;


// });
// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".price2").textContent = localStorage.product2Price;
//     document.querySelector(".Q2").textContent = localStorage.product2Q;
//     document.querySelector(".T2").textContent = Math.round(localStorage.product2T * 100) / 100;


// });
// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".price3").textContent = localStorage.product3Price;
//     document.querySelector(".Q3").textContent = localStorage.product3Q;
//     document.querySelector(".T3").textContent = Math.round(localStorage.product3T * 100) / 100;


// });
// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".price4").textContent = localStorage.product4Price;
//     document.querySelector(".Q4").textContent = localStorage.product4Q;
//     document.querySelector(".T4").textContent = Math.round(localStorage.product4T * 100) / 100;



// });

// let Totaly =+localStorage.product1T + +localStorage.product2T + +localStorage.product3T + +localStorage.product4T;
// Totaly= Math.round(Totaly * 100) / 100;
// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".totaly").textContent = `Total: $${Totaly}`;

// });
// console.log(Totaly);

let Totaly=0;
document.addEventListener("DOMContentLoaded", function() {
    const count = window.localStorage.getItem('count') || 0;
    document.querySelector(".count").textContent = count;

    for (let i = 1; i <= 4; i++) {
        const price = window.localStorage.getItem(`product${i}Price`);
        const quantity = window.localStorage.getItem(`product${i}Q`);
        const total = window.localStorage.getItem(`product${i}T`);
        
        Totaly=Totaly+ +total;
        if (quantity > 1) 
            {
            {
                
                    let tbody = document.querySelector('tbody');
                
                    
                        let tr = document.createElement('tr');
                
                        let tdProduct = document.createElement('td');
                        let imgProduct = document.createElement('img');
                        imgProduct.classList.add('productImage');
                        imgProduct.src = './product image (1).png';  
                        imgProduct.alt = 'Product Image';            
                        tdProduct.appendChild(imgProduct);
                        tdProduct.innerHTML += '<br>Curology the sunscreen 320 of lotion.'; 
                        tr.appendChild(tdProduct);  
                
                        let tdPrice = document.createElement('td');
                        tdPrice.classList.add('price1');
                        tdPrice.innerText = `${price}`;  
                        tr.appendChild(tdPrice); 
                
                        let tdQuantity = document.createElement('td');
                        tdQuantity.classList.add('Q1');
                        tdQuantity.innerText = `${quantity}`;  
                        tr.appendChild(tdQuantity);  
                
                        let tdTotal = document.createElement('td');
                        tdTotal.classList.add('T1');
                        tdTotal.innerText = `${total}`;  
                        tr.appendChild(tdTotal);  
                        let tdRemove = document.createElement('td');
                        let spanRemove = document.createElement('span');
                        spanRemove.classList.add('remove-icon');
                        let imgRemove = document.createElement('img');
                        imgRemove.src = './delete.png';  
                        imgRemove.alt = '';              
                        spanRemove.appendChild(imgRemove);
                        tdRemove.appendChild(spanRemove);
                        tr.appendChild(tdRemove);  
                
                        tbody.appendChild(tr);
                ;
            }
        }
    }
});
Totaly= Math.round(Totaly * 100) / 100;

document.addEventListener("DOMContentLoaded", ()=> {

    document.querySelector(".totaly").textContent = `Total: $${Totaly}`;

});    console.log(Totaly);

