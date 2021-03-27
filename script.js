const navLinks = document.getElementById("navLinks");
const nav = document.getElementById("navbar");


function toggleNav() {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        nav.style.position = "fixed";
    } else {
        navLinks.style.display = "none";
        nav.style.position = "sticky";
    }
}

function hideNav() {
    if (document.documentElement.clientWidth <= 550) {
        toggleNav();
    }
}

window.addEventListener("resize", function() {
    if (document.documentElement.clientWidth > 550) {
        nav.style.position = "fixed";
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
        nav.style.position = "sticky";
    }
})



