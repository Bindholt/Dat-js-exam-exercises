"use strict";

window.addEventListener("load", init);

async function init() {
    let teachers = [];
    teachers = await importTeachers();
    console.log(teachers);
}

async function importTeachers() {
    const response = await fetch("teachers.js");
    const teachersData = await response.json();
    const teachersArray = [];

    for (const teacher in teachersData) {
        const data = teachers[teacher];
		data["id"] = teacher;
		teachersArray.push(data);
    }
    
    return teachersArray;
}