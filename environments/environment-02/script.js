"use strict";

window.addEventListener("load", init);
const animals = [];
function init() {
    addHardcodedAnimals();
    displayAnimalList(animals);
    addEventListeners();
}

function addEventListeners() {
    document.querySelector("#form-container").addEventListener("submit", (event) => {
        event.preventDefault();
        addAnimal(event.target["animal-name"].value,event.target["animal-type"].value, event.target["animal-age"].value);
    });
}

function addHardcodedAnimals() {
    animals.push({
        name: "ole",
        type: "cat",
        age: "13",
    });
    animals.push({
        name: "anders",
        type: "dog",
        age: "20",
    });
    animals.push({
        name: "andreas",
        type: "snake",
        age: "25",
    });
}

function addAnimal(name, type, age) {
    animals.push({
        name,
        type,
        age,
    });
    displayAnimal(animals.length - 1);
}

function displayAnimalList(animals) {
    animals.sort(function(a,b) { return a.age - b.age});
    for (const animal in animals) {
        displayAnimal(animal);
    }

}

function displayAnimal(animal) {
    const arr = animals;
    const animalHTML = /* html */ `
            <tr>
                <td>${arr[animal].name}</td>
                <td>${arr[animal].type}</td>
                <td>${arr[animal].age}</td>
            </tr>
        `;
    document.querySelector("#list-container").querySelector("tbody").insertAdjacentHTML("beforeend", animalHTML);
}
