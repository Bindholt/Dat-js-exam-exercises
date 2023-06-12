"use strict";

window.addEventListener("load", init);

async function init() {
    let users = await getJSONData();
    console.log(users);
    users = filterUsersByAdmins(users);
    showUserList(users);
}

function filterUsersByAdmins(users) {
    return users.filter(user => user.role === "admin");
}

async function getJSONData() {
    const response = await fetch("users.json");

    const usersData = await response.json();
	const usersArray = [];
	for (const key in usersData) {
		const data = usersData[key];
		data["id"] = key;
		usersArray.push(data);
    }

    return usersArray;
}

function showUserList(users) {

    for (const user in users) {
        const userHTML = /* html */ `
            <li>${users[user].name} ${(users[user].active) ? "(aktiv)" : "(inaktiv)" }</li>
        `;

        document.querySelector("#userlist").insertAdjacentHTML("afterbegin", userHTML);
    }

}