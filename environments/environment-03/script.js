"use strict";

window.addEventListener("load", init);
const products = [];
function init() {
    products.push(getProductObject("iPhone 4", 399, false));
    products.push(getProductObject("iPhone 6", 1, true));
    products.push(getProductObject("aiPhone 1", 2999, true));   

    displayProducts();

    addEventListeners();
}

function addEventListeners() {
    document.querySelector("#select-sort-by").addEventListener("change", () => sortProducts(document.querySelector("#select-sort-by").value));
}

function sortProducts(sortBy) {
    switch (sortBy) {
        case "name":
            products.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
            break;
        case "price":
            products.sort((a,b) => a[sortBy] - b[sortBy]);
            break;
        case "inStock":
            products.sort((a,b) => b[sortBy] - a[sortBy]);
            break;
    }
    products.sort((a,b) => a[sortBy] - b[sortBy]);
    document.querySelector("#list-container").innerHTML = "";
    displayProducts();
}

function getProductObject(name, price, inStock) {
    return {
        name,
        price,
        inStock
    };
}

function displayProducts() {
    for (const product in products) {
        displayProduct(products[product]);
    }
}

function displayProduct(product) {
    const productHTML = /* HTML */ `
        <p>${product.name} ${product.price},-</p>
    `;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", productHTML);
}