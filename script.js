// Sample data for the elements
const elements = {
  H: { symbol: "H", number: 1, name: "Hydrogen", weight: 1.008, state: "Gas", type: "Non-metal" },
  He: { symbol: "He", number: 2, name: "Helium", weight: 4.0026, state: "Gas", type: "Noble gas" },
  Li: { symbol: "Li", number: 3, name: "Lithium", weight: 6.94, state: "Solid", type: "Alkali metal" },
  Be: { symbol: "Be", number: 4, name: "Beryllium", weight: 9.0122, state: "Solid", type: "Alkaline earth metal" },
  B: { symbol: "B", number: 5, name: "Boron", weight: 10.81, state: "Solid", type: "Metalloid" },
  C: { symbol: "C", number: 6, name: "Carbon", weight: 12.011, state: "Solid", type: "Non-metal" },
  N: { symbol: "N", number: 7, name: "Nitrogen", weight: 14.007, state: "Gas", type: "Non-metal" },
  O: { symbol: "O", number: 8, name: "Oxygen", weight: 15.999, state: "Gas", type: "Non-metal" },
  F: { symbol: "F", number: 9, name: "Fluorine", weight: 18.998, state: "Gas", type: "Halogen" },
  Ne: { symbol: "Ne", number: 10, name: "Neon", weight: 20.180, state: "Gas", type: "Noble gas" },
  Na: { symbol: "Na", number: 11, name: "Sodium", weight: 22.990, state: "Solid", type: "Alkali metal" },
  Mg: { symbol: "Mg", number: 12, name: "Magnesium", weight: 24.305, state: "Solid", type: "Alkaline earth metal" },
  Al: { symbol: "Al", number: 13, name: "Aluminum", weight: 26.982, state: "Solid", type: "Post-transition metal" },
  Si: { symbol: "Si", number: 14, name: "Silicon", weight: 28.085, state: "Solid", type: "Metalloid" },
  P: { symbol: "P", number: 15, name: "Phosphorus", weight: 30.974, state: "Solid", type: "Non-metal" },
  S: { symbol: "S", number: 16, name: "Sulfur", weight: 32.065, state: "Solid", type: "Non-metal" },
  Cl: { symbol: "Cl", number: 17, name: "Chlorine", weight: 35.45, state: "Gas", type: "Halogen" },
  Ar: { symbol: "Ar", number: 18, name: "Argon", weight: 39.948, state: "Gas", type: "Noble gas" },
  K: { symbol: "K", number: 19, name: "Potassium", weight: 39.098, state: "Solid", type: "Alkali metal" },
  Ca: { symbol: "Ca", number: 20, name: "Calcium", weight: 40.078, state: "Solid", type: "Alkaline earth metal" },
  // Add more elements here as needed...
};

// Utility to generate HTML for an element button
function createElementButton(symbol) {
  const element = elements[symbol];
  return `<button class="element" data-symbol="${symbol}" onclick="showElementDetails('${symbol}')">${element.symbol}</button>`;
}

// Search function
function searchElements(query) {
  const searchQuery = query.toLowerCase();
  const filteredSymbols = Object.keys(elements).filter(symbol => {
    const element = elements[symbol];
    return (
      element.symbol.toLowerCase().includes(searchQuery) ||
      element.name.toLowerCase().includes(searchQuery)
    );
  });

  // Render the filtered elements
  const container = document.getElementById("elementsContainer");
  container.innerHTML = filteredSymbols.map(createElementButton).join("");
}

// Show element details in a modal
function showElementDetails(symbol) {
  const element = elements[symbol];
  const modal = document.getElementById("elementModal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <h2>${element.name} (${element.symbol})</h2>
    <p>Atomic Number: ${element.number}</p>
    <p>Atomic Weight: ${element.weight}</p>
    <p>State: ${element.state}</p>
    <p>Type: ${element.type}</p>
  `;

  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("elementModal");
  modal.style.display = "none";
}

// Toggle fullscreen mode
function toggleFullscreen() {
  const container = document.getElementById("elementsContainer");
  if (!document.fullscreenElement) {
    container.requestFullscreen().catch(err => {
      console.error("Error attempting to enable fullscreen mode:", err);
    });
  } else {
    document.exitFullscreen();
  }
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchElements(e.target.value);
});

// Event listener for closing the modal
document.getElementById("closeModalBtn").addEventListener("click", closeModal);

// Event listener for fullscreen button
document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

// On page load, show all elements
window.onload = function () {
  const container = document.getElementById("elementsContainer");
  container.innerHTML = Object.keys(elements).map(createElementButton).join("");
};
