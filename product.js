const params = new URLSearchParams(window.location.search);

document.getElementById("productName").textContent = params.get("name");
document.getElementById("productPrice").textContent = "$" + Number(params.get("price")).toLocaleString();
document.getElementById("productRange").textContent = "Autonomía: " + params.get("range") + "km";
document.getElementById("productImg").src = params.get("img");