// DOM elements
const dropdowns = document.querySelectorAll(".dropdown-item");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

// Dropdown logic
dropdowns.forEach((dropdown) => {
  const toggleButton = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");
  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.contains("show");
    closeAllDropdowns();
    if (!isOpen) {
      menu.classList.add("show");
      toggleButton.classList.add("active");
    }
  });
});

// Search button logic
searchBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  searchInput.classList.toggle("open");
  searchBtn.classList.toggle("active");
  if (searchInput.classList.contains("open")) {
    searchInput.focus();
  }
});

// Global click closer
document.addEventListener("click", () => {
  closeAllDropdowns();
  searchInput.classList.remove("open");
  searchBtn.classList.remove("active");
});

// Global escape key closer
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllDropdowns();
    searchInput.classList.remove("open");
    searchBtn.classList.remove("active");
    searchInput.blur();
  }
});

// Helper function to remove the 'show' class from all menus, and the 'active' from active buttons
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu.show").forEach(menu => menu.classList.remove("show"));
  document.querySelectorAll(".dropdown-toggle.active").forEach(button => button.classList.remove("active"));
};

// Stop clicks inside the input from bubbling up and closing the search bar
searchInput.addEventListener("click", (event) => {
  event.stopPropagation();
});
