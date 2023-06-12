import { teachers } from "./teachers.js";

window.addEventListener("load", init);

function init() {
    console.log(teachers);
    displayTeachers();
}

function displayTeachers() {
    for (const teacher in teachers) {
        displayTeacher(teachers[teacher]);
    }
}

function displayTeacher(teacher) {
    const teacherHTML = /* html */ `
        <li><p>${teacher.name}</p><p>Email: ${teacher.email}</p></li>
    `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", teacherHTML);
}

function sortArray(sortBy) {
    return teachers.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
}

window.sortArray = sortArray;