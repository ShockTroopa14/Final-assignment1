"use-strict"

const modal = document.getElementById("myModal");

let btn = document.getElementById('project-1');

const span = document.getElementsByClassName("close")[0];


function OpenPopUp(id) {
    console.log("IM HERE")
    document.getElementById(id).style.display = "block";
}

function closePopUp(id) {
    document.getElementById(id).style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}