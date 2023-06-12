"use strict";

window.addEventListener("load", init);


const products = [];
function init() {

    products.push(createProductObject("iPhone 4", 299, false));
    products.push(createProductObject("iPhone 7", 1299, true));
    products.push(createProductObject("iPhone X", 2299, true));
    displayProductList();

    addEventListeners();
}   

function addEventListeners() {
    document.querySelector("#form-container").addEventListener("submit", (event) => {
        event.preventDefault();
        products.push({
            name: event.target["name"].value,
            price: Number(event.target["price"].value),
            inStock: event.target["inStock"].checked,
        });
        displayProductList();
    });
}

function createProductObject(name, price, inStock) {
    return {
        name,
        price,
        inStock
    }
}

function displayProductList() {
    sortProductsByStock();
    document.querySelector("#list-container").innerHTML = "";
    for (const product in products) {
        displayProduct(products[product]);
    }
}

function sortProductsByStock() {
    products.sort((a,b) => b.inStock - a.inStock);
}

function displayProduct(product) {
    const productHTML = /* html */ `
        <p>${product.name} ${product.price},-</p>
    `
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHTML);
}