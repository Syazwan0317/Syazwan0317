const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* MOBILE MENU */
if(menuToggle){
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}

/* TYPING EFFECT */
const text = "Software Developer in Progress...";
let i = 0;

function typeEffect(){
const typing = document.querySelector(".typing");
if(!typing) return;

typing.innerHTML = text.substring(0, i);
i++;

if(i <= text.length){
setTimeout(typeEffect, 70);
}
}

typeEffect();
