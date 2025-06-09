// ==== ЗАВДАННЯ 1: КОШИК ====

const products = [
    { name: "Футболка", price: 12.99, quantity: 1 },
    { name: "Кепка", price: 8.99, quantity: 1 },
    { name: "Кросівки", price: 44.99, quantity: 1 }
  ];
  
  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("totalPrice");
  
  function renderCart() {
    cartDiv.innerHTML = "";
  
    products.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <div class="quantity-controls">
          <button onclick="changeQty(${index}, -1)">-</button>
          <span>${product.quantity}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      `;
  
      cartDiv.appendChild(productDiv);
    });
  
    updateTotal();
  }
  
  function changeQty(index, delta) {
    products[index].quantity += delta;
    if (products[index].quantity < 0) products[index].quantity = 0;
    renderCart();
  }
  
  function updateTotal() {
    let total = 0;
    products.forEach(p => {
      total += p.price * p.quantity;
    });
    totalSpan.textContent = `$${total.toFixed(2)}`;
  }
  
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("Замовлення оформлено! Дякуємо :)");
  });
  
  renderCart();
  
  // ==== ЗАВДАННЯ 2: ПАЛІТРА ====
  
  const colors = ["red", "yellow", "green", "blue", "orange", "cyan"];
  let selectedColor = null;
  
  const palette = document.getElementById("palette");
  const grid = document.getElementById("grid");
  
  colors.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
  
    box.addEventListener("click", () => {
      document.querySelectorAll(".color-box").forEach(el => el.classList.remove("selected"));
      box.classList.add("selected");
      selectedColor = color;
    });
  
    palette.appendChild(box);
  });
  
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
  
    cell.addEventListener("mouseenter", () => {
      if (selectedColor) {
        cell.style.backgroundColor = selectedColor;
      }
    });
  
    grid.appendChild(cell);
  }
  