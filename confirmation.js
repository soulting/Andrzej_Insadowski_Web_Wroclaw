const cart = JSON.parse(localStorage.getItem("cart"));
const endPrice = JSON.parse(localStorage.getItem("endPrice"));
const summary = document.getElementById("summary");

if (cart.length !== 0) {
  summary.innerHTML = `<h1>Zamówienie złożone pomyślnie!</h1> <h2>Łączny koszt: ${endPrice}</h2> ${cart
    .map((item) => `<h2>${item.name}</h2> <p>ilości ${item.count}</p>`)
    .join("")}`;
} else {
  summary.innerHTML = `<h1>Brak danych o zamówieniu</h1>`;
}
