
const categories = [
  ["🥦", "Grocery"],
  ["🍎", "Fruits & Vegetables"],
  ["🍔", "Food"],
  ["👕", "Fashion"],
  ["📱", "Electronics"],
  ["🏠", "Home & Kitchen"],
  ["💄", "Beauty"],
  ["💊", "Healthcare"],
  ["📚", "Books"],
  ["⚽", "Sports"],
  ["🔧", "Hardware"],
  ["🐶", "Pet Supplies"]
];

const products = [
  {
    name: "Wireless Headphones",
    price: 1499,
    image: "https://placehold.co/400x300?text=Headphones"
  },
  {
    name: "Smart Watch",
    price: 1999,
    image: "https://placehold.co/400x300?text=Smart+Watch"
  },
  {
    name: "Running Shoes",
    price: 1299,
    image: "https://placehold.co/400x300?text=Shoes"
  },
  {
    name: "Travel Backpack",
    price: 899,
    image: "https://placehold.co/400x300?text=Backpack"
  }
];

let cart = [];

const categoryContainer =
  document.getElementById("categories");

categories.forEach(([emoji, name]) => {
  categoryContainer.innerHTML += `
    <div class="category" onclick="filterCategory('${name}')">
      <span class="emoji">${emoji}</span>
      <strong>${name}</strong>
    </div>
  `;
});

function displayProducts(items) {
  document.getElementById("products").innerHTML =
    items.map((product, index) => `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
        <button onclick="addToCart(${index})">
          Add to Cart
        </button>
      </div>
    `).join("");
}

displayProducts(products);

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cartCount").textContent =
    cart.length;

  alert("Product added to cart!");
}

function showCart() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  alert(
    `Cart Items: ${cart.length}\nTotal: ₹${total}`
  );
}

function searchProducts() {
  const query = document.getElementById("searchInput")
    .value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  displayProducts(filtered);
}

function filterCategory(name) {
  alert(`Opening ${name} category`);
}

function exploreProducts() {
  document.getElementById("products")
    .scrollIntoView({ behavior: "smooth" });
}



function renderCategories() {

    const categoryContainer = document.getElementById("category-list");

    if (!categoryContainer) return;

    categoryContainer.innerHTML = MARKET_CATEGORIES.map(category => {

        return `
            <a class="category-card"
               href="products.html?category=${category.id}">

                <div class="category-icon">
                    ${category.icon}
                </div>

                <b>${category.name}</b>

                <p class="muted">Explore products</p>

            </a>
        `;

    }).join("");

}
