// Shrink page scale based on screen width
const adjustPageScale = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 992 && screenWidth <= 1600) {
        document.body.style.transform = "scale(0.9)";
        document.body.style.transformOrigin = "top left";
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        document.body.style.transform = "scale(0.8)";
        document.body.style.transformOrigin = "top left";
    } else if (screenWidth >= 600 && screenWidth < 700) {
        document.body.style.transform = "scale(0.75)";
        document.body.style.transformOrigin = "top left";
    } else if (screenWidth <= 600) {
        document.body.style.transform = "scale(0.5)";
        document.body.style.transformOrigin = "top left";
    } else {
        document.body.style.transform = "scale(1)";
        document.body.style.transformOrigin = "inherit";
    }
};

// Collapsible left menu
const toggleMenu = document.getElementById("toggle-menu");
const leftMenu = document.querySelector(".left-menu");

toggleMenu.addEventListener("click", () => {
    leftMenu.classList.toggle("collapsed");
});

// Adjust page scale on load and resize
window.addEventListener("resize", adjustPageScale);
document.addEventListener("DOMContentLoaded", adjustPageScale);
