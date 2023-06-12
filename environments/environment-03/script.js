"use strict";

window.addEventListener("load", init);

function init() {
    const products = [];
    products.push(addProduct("iphone", 999, true));
    products.push(addProduct("iphone X", 2999, true));
    products.push(addProduct("iphone 11", 1999, false));

    displayProductsInStock(products);

    addEventListeners();
}

function addEventListeners() {
    document.querySelector("#form-container").addEventListener("submit", (event) => {
        event.preventDefault();
        const product = {
            name: event.target["name"].value, 
            price: event.target["price"].value, 
            inStock: event.target["inStock"].checked
        }
        displayProduct(product);
    });
}

function addProduct(name, price, inStock) {
    const product = {
        name,
        price,
        inStock
    }
    
    return product;
}

function displayProductsInStock(products) {
    document.querySelector("#list-container").insertAdjacentHTML("afterbegin", "<ul></ul>");
    for (const product in products) {
        if(products[product].inStock) {
            displayProduct(products[product]);
        }
    }
}

function displayProduct(product) {
    console.log(product);
    const productHTML = /* html */ `
        <li>${product.name} ${product.price},-</li>
    `;
    document.querySelector("#list-container").querySelector("ul").insertAdjacentHTML("beforeend", productHTML);
}