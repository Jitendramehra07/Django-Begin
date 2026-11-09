
const products = [
    {
        id: 1,
        name: "Classic White Shirt",
        category: "Fashion",
        price: 1299,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"
    },
    {
        id: 2,
        name: "Casual Sneakers",
        category: "Fashion",
        price: 2499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 3499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
        id: 5,
        name: "Modern Table Lamp",
        category: "Home",
        price: 1599,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
    },
    {
        id: 6,
        name: "Decorative Vase",
        category: "Home",
        price: 899,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600"
    },
    {
        id: 7,
        name: "Leather Handbag",
        category: "Fashion",
        price: 2799,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
    }
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("shopAuraCart")) || [];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

// Display products
function displayProducts(items) {
    productGrid.innerHTML = "";

    if (items.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>₹${product.price.toLocaleString("en-IN")}</p>
                <button class="btn add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;

        productGrid.appendChild(card);
    });
}

// Search, filter and sort
function filterProducts() {
    let filtered = [...products];

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sort = sortFilter.value;

    filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    if (category !== "All") {
        filtered = filtered.filter(product =>
            product.category === category
        );
    }

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

// Add product to cart
productGrid.addEventListener("click", event => {
    const button = event.target.closest(".add-to-cart");

    if (!button) return;

    const id = Number(button.dataset.id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveCart();
    alert("Product added to cart!");
});

// Save cart
function saveCart() {
    localStorage.setItem("shopAuraCart", JSON.stringify(cart));
    updateCart();
}

// Update cart
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return;

        total += product.price * item.quantity;
        count += item.quantity;

        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
            <span>${product.name} × ${item.quantity}</span>
            <strong>₹${(product.price * item.quantity).toLocaleString("en-IN")}</strong>
            <button data-remove="${product.id}">Remove</button>
        `;

        cartItems.appendChild(row);
    });

    if (count === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString("en-IN");
}

// Remove cart item
document.getElementById("cartItems").addEventListener("click", event => {
    const button = event.target.closest("[data-remove]");

    if (!button) return;

    const id = Number(button.dataset.remove);
    cart = cart.filter(item => item.id !== id);

    saveCart();
});

// Mobile navigation
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("active");
});

// Category navigation
document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        categoryFilter.value = card.dataset.category;
        filterProducts();
    });
});

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    alert("Thank you for subscribing!");
    event.target.reset();
});

// Demo login
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    alert("Demo login successful! Connect Django authentication later.");
    event.target.reset();
});

// Demo registration
document.getElementById("registerForm").addEventListener("submit", event => {
    event.preventDefault();
    alert("Demo registration submitted! Connect Django registration later.");
    event.target.reset();
});

// Demo checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Checkout is currently a demo. Integrate Django checkout later.");
});

// Initial loading
displayProducts(products);
updateCart();
