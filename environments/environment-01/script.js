"use strict";

window.addEventListener("load", init);

async function init() {
    const users = await getUserData();
    console.log(users);
    showUserHTML(users);
    showRoleCountHTML(users);
}

async function getUserData() {
    const response = await fetch("users.json");
    const userData = await response.json();
    const userArray = [];
    for (const user in userData) {
        const data = userData[user];
		data["id"] = user;
		userArray.push(data);
    }

    return userArray;
}

function showUserHTML(users) {
    for (const user in users) {
        const userHTML = /* html */ `
            <li>${users[user].name}</li>
        `
        document.querySelector("#userlist").insertAdjacentHTML("afterbegin", userHTML);
    }
}

function showRoleCountHTML(users) {
    let adminCount = 0;
    let userCount = 0;
    let guestCount = 0;
    for (const user in users) {
        switch(users[user].role) {
            case "admin":
                adminCount++;
                break;
            case "user":
                userCount++;
                break;
            case "guest":
                guestCount++;
        }
    }

    document.querySelector("#admin-count").innerHTML = adminCount;
    document.querySelector("#user-count").innerHTML = userCount;
    document.querySelector("#guest-count").innerHTML = guestCount;
}