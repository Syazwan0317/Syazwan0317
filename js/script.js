const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* MOBILE MENU */
menuToggle.addEventListener("click", () => {
navLinks.style.display =
navLinks.style.display === "flex" ? "none" : "flex";
});

/* TYPING ANIMATION */
const text = "Software Developer in Progress...";
let i = 0;

function typeEffect(){
document.querySelector(".typing").innerHTML =
text.substring(0, i);

i++;

if(i <= text.length){
setTimeout(typeEffect, 80);
}
}

typeEffect();
