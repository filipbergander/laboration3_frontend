"use strict";
import '/src/sass/main.scss';

const toggleBtn = document.getElementById("btn-menu"); // Hamburgermeny
const closeBtn = document.getElementById("btn-close"); // Stänga Hamburgermeny
const menuArea = document.getElementById("nav-menu"); // Navigeringsmenyn

const darkBtn = document.querySelector(".btn-darkened"); // Knapp för att toggla mörkt/ljust tema på startsidan.

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark"); // Lägger till classlist dark på body.
        darkBtn.classList.toggle("dark"); // Lägger till classlist dark på knappen
        if (document.body.classList.contains("dark")) { // Om body.dark finns ändras knappens text
            darkBtn.innerHTML = "Ljust tema"; // Ändrar texten inom knappen
            toggleBtn.classList.add("dark"); // Lägger till klassen mörk
            closeBtn.classList.add("dark");
            menuArea.classList.add("dark");
        } else { // Om användaren klickar på knappen för att toggla ljust tema
            darkBtn.innerHTML = "Mörkt tema";
            toggleBtn.classList.remove("dark"); // Tar bort klassen mörk
            closeBtn.classList.remove("dark");
            menuArea.classList.remove("dark");
        }
    })
} // För att öppna hamburgermeny
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("close");
    closeBtn.classList.toggle("show");
    menuArea.classList.toggle("show");
});
// För att stänga hamburgermeny
closeBtn.addEventListener("click", () => {
    closeBtn.classList.remove("show");
    toggleBtn.classList.remove("close");
    menuArea.classList.remove("show");
});