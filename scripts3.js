const toggle = document.getElementById("menu_toggle");
const nav = document.getElementById("nav_links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// 🔥 CERRAR AL HACER CLICK FUERA
document.addEventListener("click", (e) => {

    const isClickInsideMenu = nav.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        nav.classList.remove("active");
    }

});