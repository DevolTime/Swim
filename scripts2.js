const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const rangeFilter = document.getElementById("rangeFilter");

const products = document.querySelectorAll(".product-card");

function inRange(value, range) {
    if (range === "all") return true;

    const [min, max] = range.split("-").map(Number);
    return value >= min && value <= max;
}

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const priceValue = priceFilter.value;
    const rangeValue = rangeFilter.value;

    let visible = 0;

    products.forEach(product => {
        const name = product.dataset.name?.toLowerCase() || "";
        const price = parseInt(product.dataset.price);
        const range = parseInt(product.dataset.range);

        let show = true;

        // 🔍 BUSCADOR
        if (!name.includes(searchValue)) show = false;

        // 💰 PRECIO
        if (!inRange(price, priceValue)) show = false;

        // 🔋 AUTONOMÍA
        if (!inRange(range, rangeValue)) show = false;

        if (show) visible++;

        product.style.display = show ? "block" : "none";
    });

    console.log("Resultados:", visible);
}

/* EVENTOS */
searchInput.addEventListener("input", filterProducts);
priceFilter.addEventListener("change", filterProducts);
rangeFilter.addEventListener("change", filterProducts);

// Ordenar por:
const sortSelect = document.getElementById("sortPrice");
const productsContainer = document.querySelector(".products-grid");

function sortProducts() {
    const value = sortSelect.value;

    const productsArray = Array.from(document.querySelectorAll(".product-card"));

    productsArray.sort((a, b) => {
        const priceA = parseInt(a.dataset.price);
        const priceB = parseInt(b.dataset.price);

        if (value === "low-high") return priceA - priceB;
        if (value === "high-low") return priceB - priceA;

        return 0;
    });

    productsArray.forEach(product => {
        productsContainer.appendChild(product);
    });
}

sortSelect.addEventListener("change", sortProducts);


// ver mas productos

function goToProduct(button) {
    const card = button.closest(".product-card");

    const name = card.dataset.name;
    const price = card.dataset.price;
    const range = card.dataset.range;
    const img = card.querySelector("img").src;

    const url = `product.html?name=${encodeURIComponent(name)}&price=${price}&range=${range}&img=${encodeURIComponent(img)}`;

    window.location.href = url;
}