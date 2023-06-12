"use strict";

const users = [];

window.addEventListener("load", init); 

async function init() {
    await setGlobalUsers();
    console.log(users);
    displayActiveUsersHTML();
}

async function setGlobalUsers() {
    const response = await fetch("users.json");
    const usersData = await response.json();

    for (const user in usersData) {
        const data = usersData[user];
		data["id"] = user;
		users.push(data);
    }
}

function displayActiveUsersHTML() {
    for (const user in users) {
        displayActiveUserHTML(user);
    }
}

function displayActiveUserHTML(user) {
    if (users[user].active) {
        const userHTML = /* html */ `
                <li>${users[user].name}</li>
            `;
        document.querySelector("#userlist").insertAdjacentHTML("afterbegin", userHTML);
    }
}

function addUser(name, active, role) {
    users.push({
        name,
        active,
        role
    });

    displayActiveUserHTML(users.length - 1);
}