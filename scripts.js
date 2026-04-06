const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("btn_prev");
const nextBtn = document.getElementById("btn_next");
const indicators = document.getElementById("indicators");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel_item");
const totalItems = items.length;

for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div");
    dot.classList.add("indicator");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(dot);
}

function updateIndicators() {
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


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