"use strict";

window.addEventListener("load", init);

const animals = []; 

function init() {
    addEventListeners();
}

function addEventListeners() {
    document.querySelector("#create-form").addEventListener("submit", (event) => {
        event.preventDefault();
        addAnimal(event.target["animal-name"].value, event.target["animal-type"].value, event.target["animal-age"].value);
        document.querySelector("#create-form").reset();
    });
}

function addAnimal(name, type, age) {
    animals.push({
        name,
        type,
        age,
    });
    setAnimalHTML(animals[animals.length -1]);
}

function setAnimalHTML(animal) {
    console.log(animal.name);
    const animalHTML = /* html */ `
        <tr>
            <td>${animal.name}</td>
            <td>${animal.type}</td>
            <td>${animal.age}</td>
        </tr>
    `;
    document.querySelector("#list-container").querySelector("tbody").insertAdjacentHTML("beforeend", animalHTML);
}