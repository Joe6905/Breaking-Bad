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
  Na: { symbol: "Na", number: 11, name: "Sodium", weight: 22.9897, state: "Solid", type: "Alkali metal" },
  Mg: { symbol: "Mg", number: 12, name: "Magnesium", weight: 24.305, state: "Solid", type: "Alkaline earth metal" },
  Al: { symbol: "Al", number: 13, name: "Aluminum", weight: 26.9815, state: "Solid", type: "Post-transition metal" },
  Si: { symbol: "Si", number: 14, name: "Silicon", weight: 28.085, state: "Solid", type: "Metalloid" },
  P: { symbol: "P", number: 15, name: "Phosphorus", weight: 30.9738, state: "Solid", type: "Non-metal" },
  S: { symbol: "S", number: 16, name: "Sulfur", weight: 32.06, state: "Solid", type: "Non-metal" },
  Cl: { symbol: "Cl", number: 17, name: "Chlorine", weight: 35.45, state: "Gas", type: "Halogen" },
  Ar: { symbol: "Ar", number: 18, name: "Argon", weight: 39.948, state: "Gas", type: "Noble gas" },
  K: { symbol: "K", number: 19, name: "Potassium", weight: 39.098, state: "Solid", type: "Alkali metal" },
  Ca: { symbol: "Ca", number: 20, name: "Calcium", weight: 40.078, state: "Solid", type: "Alkaline earth metal" },
  Sc: { symbol: "Sc", number: 21, name: "Scandium", weight: 44.9559, state: "Solid", type: "Transition metal" },
  Ti: { symbol: "Ti", number: 22, name: "Titanium", weight: 47.867, state: "Solid", type: "Transition metal" },
  V: { symbol: "V", number: 23, name: "Vanadium", weight: 50.9415, state: "Solid", type: "Transition metal" },
  Cr: { symbol: "Cr", number: 24, name: "Chromium", weight: 51.9961, state: "Solid", type: "Transition metal" },
  Mn: { symbol: "Mn", number: 25, name: "Manganese", weight: 54.938, state: "Solid", type: "Transition metal" },
  Fe: { symbol: "Fe", number: 26, name: "Iron", weight: 55.845, state: "Solid", type: "Transition metal" },
  Co: { symbol: "Co", number: 27, name: "Cobalt", weight: 58.9332, state: "Solid", type: "Transition metal" },
  Ni: { symbol: "Ni", number: 28, name: "Nickel", weight: 58.6934, state: "Solid", type: "Transition metal" },
  Cu: { symbol: "Cu", number: 29, name: "Copper", weight: 63.546, state: "Solid", type: "Transition metal" },
  Zn: { symbol: "Zn", number: 30, name: "Zinc", weight: 65.38, state: "Solid", type: "Transition metal" },
  Ga: { symbol: "Ga", number: 31, name: "Gallium", weight: 69.723, state: "Solid", type: "Post-transition metal" },
  Ge: { symbol: "Ge", number: 32, name: "Germanium", weight: 72.630, state: "Solid", type: "Metalloid" },
  As: { symbol: "As", number: 33, name: "Arsenic", weight: 74.9216, state: "Solid", type: "Metalloid" },
  Se: { symbol: "Se", number: 34, name: "Selenium", weight: 78.971, state: "Solid", type: "Non-metal" },
  Br: { symbol: "Br", number: 35, name: "Bromine", weight: 79.904, state: "Liquid", type: "Halogen" },
  Kr: { symbol: "Kr", number: 36, name: "Krypton", weight: 83.798, state: "Gas", type: "Noble gas" },
  Rb: { symbol: "Rb", number: 37, name: "Rubidium", weight: 85.4678, state: "Solid", type: "Alkali metal" },
  Sr: { symbol: "Sr", number: 38, name: "Strontium", weight: 87.62, state: "Solid", type: "Alkaline earth metal" },
  Y: { symbol: "Y", number: 39, name: "Yttrium", weight: 88.9058, state: "Solid", type: "Transition metal" },
  Zr: { symbol: "Zr", number: 40, name: "Zirconium", weight: 91.224, state: "Solid", type: "Transition metal" },
  Nb: { symbol: "Nb", number: 41, name: "Niobium", weight: 92.9064, state: "Solid", type: "Transition metal" },
  Mo: { symbol: "Mo", number: 42, name: "Molybdenum", weight: 95.961, state: "Solid", type: "Transition metal" },
  Tc: { symbol: "Tc", number: 43, name: "Technetium", weight: 98, state: "Solid", type: "Transition metal" },
  Ru: { symbol: "Ru", number: 44, name: "Ruthenium", weight: 101.07, state: "Solid", type: "Transition metal" },
  Rh: { symbol: "Rh", number: 45, name: "Rhodium", weight: 102.9055, state: "Solid", type: "Transition metal" },
  Pd: { symbol: "Pd", number: 46, name: "Palladium", weight: 106.42, state: "Solid", type: "Transition metal" },
  Ag: { symbol: "Ag", number: 47, name: "Silver", weight: 107.8682, state: "Solid", type: "Transition metal" },
  Cd: { symbol: "Cd", number: 48, name: "Cadmium", weight: 112.414, state: "Solid", type: "Transition metal" },
  In: { symbol: "In", number: 49, name: "Indium", weight: 114.818, state: "Solid", type: "Post-transition metal" },
  Sn: { symbol: "Sn", number: 50, name: "Tin", weight: 118.710, state: "Solid", type: "Post-transition metal" },
  Sb: { symbol: "Sb", number: 51, name: "Antimony", weight: 121.760, state: "Solid", type: "Metalloid" },
  Te: { symbol: "Te", number: 52, name: "Tellurium", weight: 127.60, state: "Solid", type: "Metalloid" },
  I: { symbol: "I", number: 53, name: "Iodine", weight: 126.9044, state: "Solid", type: "Halogen" },
  Xe: { symbol: "Xe", number: 54, name: "Xenon", weight: 131.293, state: "Gas", type: "Noble gas" },
  Cs: { symbol: "Cs", number: 55, name: "Cesium", weight: 132.9055, state: "Solid", type: "Alkali metal" },
  Ba: { symbol: "Ba", number: 56, name: "Barium", weight: 137.327, state: "Solid", type: "Alkaline earth metal" },
  La: { symbol: "La", number: 57, name: "Lanthanum", weight: 138.904, state: "Solid", type: "Lanthanide" },
  Ce: { symbol: "Ce", number: 58, name: "Cerium", weight: 140.116, state: "Solid", type: "Lanthanide" },
  Pr: { symbol: "Pr", number: 59, name: "Praseodymium", weight: 140.907, state: "Solid", type: "Lanthanide" },
  Nd: { symbol: "Nd", number: 60, name: "Neodymium", weight: 144.242, state: "Solid", type: "Lanthanide" },
  Pm: { symbol: "Pm", number: 61, name: "Promethium", weight: 145, state: "Solid", type: "Lanthanide" },
  Sm: { symbol: "Sm", number: 62, name: "Samarium", weight: 150.36, state: "Solid", type: "Lanthanide" },
  Eu: { symbol: "Eu", number: 63, name: "Europium", weight: 151.964, state: "Solid", type: "Lanthanide" },
  Gd: { symbol: "Gd", number: 64, name: "Gadolinium", weight: 157.25, state: "Solid", type: "Lanthanide" },
  Tb: { symbol: "Tb", number: 65, name: "Terbium", weight: 158.9253, state: "Solid", type: "Lanthanide" },
  Dy: { symbol: "Dy", number: 66, name: "Dysprosium", weight: 162.500, state: "Solid", type: "Lanthanide" },
  Ho: { symbol: "Ho", number: 67, name: "Holmium", weight: 164.9303, state: "Solid", type: "Lanthanide" },
  Er: { symbol: "Er", number: 68, name: "Erbium", weight: 167.259, state: "Solid", type: "Lanthanide" },
  Tm: { symbol: "Tm", number: 69, name: "Thulium", weight: 168.9342, state: "Solid", type: "Lanthanide" },
  Yb: { symbol: "Yb", number: 70, name: "Ytterbium", weight: 173.04, state: "Solid", type: "Lanthanide" },
  Lu: { symbol: "Lu", number: 71, name: "Lutetium", weight: 174.9668, state: "Solid", type: "Lanthanide" },
  Hf: { symbol: "Hf", number: 72, name: "Hafnium", weight: 178.49, state: "Solid", type: "Transition metal" },
  Ta: { symbol: "Ta", number: 73, name: "Tantalum", weight: 180.9479, state: "Solid", type: "Transition metal" },
  W: { symbol: "W", number: 74, name: "Tungsten", weight: 183.84, state: "Solid", type: "Transition metal" },
  Re: { symbol: "Re", number: 75, name: "Rhenium", weight: 186.207, state: "Solid", type: "Transition metal" },
  Os: { symbol: "Os", number: 76, name: "Osmium", weight: 190.23, state: "Solid", type: "Transition metal" },
  Ir: { symbol: "Ir", number: 77, name: "Iridium", weight: 192.217, state: "Solid", type: "Transition metal" },
  Pt: { symbol: "Pt", number: 78, name: "Platinum", weight: 195.084, state: "Solid", type: "Transition metal" },
  Au: { symbol: "Au", number: 79, name: "Gold", weight: 196.9665, state: "Solid", type: "Transition metal" },
  Hg: { symbol: "Hg", number: 80, name: "Mercury", weight: 200.592, state: "Liquid", type: "Transition metal" },
  Tl: { symbol: "Tl", number: 81, name: "Thallium", weight: 204.38, state: "Solid", type: "Post-transition metal" },
  Pb: { symbol: "Pb", number: 82, name: "Lead", weight: 207.2, state: "Solid", type: "Post-transition metal" },
  Bi: { symbol: "Bi", number: 83, name: "Bismuth", weight: 208.9804, state: "Solid", type: "Post-transition metal" },
  Po: { symbol: "Po", number: 84, name: "Polonium", weight: 209, state: "Solid", type: "Metalloid" },
  At: { symbol: "At", number: 85, name: "Astatine", weight: 210, state: "Solid", type: "Halogen" },
  Rn: { symbol: "Rn", number: 86, name: "Radon", weight: 222, state: "Gas", type: "Noble gas" },
  Fr: { symbol: "Fr", number: 87, name: "Francium", weight: 223, state: "Solid", type: "Alkali metal" },
  Ra: { symbol: "Ra", number: 88, name: "Radium", weight: 226, state: "Solid", type: "Alkaline earth metal" },
  Ac: { symbol: "Ac", number: 89, name: "Actinium", weight: 227, state: "Solid", type: "Actinide" },
  Th: { symbol: "Th", number: 90, name: "Thorium", weight: 232.0381, state: "Solid", type: "Actinide" },
  Pa: { symbol: "Pa", number: 91, name: "Protactinium", weight: 231.0359, state: "Solid", type: "Actinide" },
  U: { symbol: "U", number: 92, name: "Uranium", weight: 238.0289, state: "Solid", type: "Actinide" },
  Np: { symbol: "Np", number: 93, name: "Neptunium", weight: 237, state: "Solid", type: "Actinide" },
  Pu: { symbol: "Pu", number: 94, name: "Plutonium", weight: 244, state: "Solid", type: "Actinide" },
  Am: { symbol: "Am", number: 95, name: "Americium", weight: 243, state: "Solid", type: "Actinide" },
  Cm: { symbol: "Cm", number: 96, name: "Curium", weight: 247, state: "Solid", type: "Actinide" },
  Bk: { symbol: "Bk", number: 97, name: "Berkelium", weight: 247, state: "Solid", type: "Actinide" },
  Cf: { symbol: "Cf", number: 98, name: "Californium", weight: 251, state: "Solid", type: "Actinide" },
  Es: { symbol: "Es", number: 99, name: "Einsteinium", weight: 252, state: "Solid", type: "Actinide" },
  Fm: { symbol: "Fm", number: 100, name: "Fermium", weight: 257, state: "Solid", type: "Actinide" },
  Md: { symbol: "Md", number: 101, name: "Mendelevium", weight: 258, state: "Solid", type: "Actinide" },
  No: { symbol: "No", number: 102, name: "Nobelium", weight: 259, state: "Solid", type: "Actinide" },
  Lr: { symbol: "Lr", number: 103, name: "Lawrencium", weight: 262, state: "Solid", type: "Actinide" },
  Rf: { symbol: "Rf", number: 104, name: "Rutherfordium", weight: 267, state: "Solid", type: "Transition metal" },
  Db: { symbol: "Db", number: 105, name: "Dubnium", weight: 270, state: "Solid", type: "Transition metal" },
  Sg: { symbol: "Sg", number: 106, name: "Seaborgium", weight: 271, state: "Solid", type: "Transition metal" },
  Bh: { symbol: "Bh", number: 107, name: "Bohrium", weight: 270, state: "Solid", type: "Transition metal" },
  Hs: { symbol: "Hs", number: 108, name: "Hassium", weight: 277, state: "Solid", type: "Transition metal" },
  Mt: { symbol: "Mt", number: 109, name: "Meitnerium", weight: 278, state: "Solid", type: "Transition metal" },
  Ds: { symbol: "Ds", number: 110, name: "Darmstadtium", weight: 281, state: "Solid", type: "Transition metal" },
  Rg: { symbol: "Rg", number: 111, name: "Roentgenium", weight: 282, state: "Solid", type: "Transition metal" },
  Cn: { symbol: "Cn", number: 112, name: "Copernicium", weight: 285, state: "Solid", type: "Post-transition metal" },
  Nh: { symbol: "Nh", number: 113, name: "Nihonium", weight: 286, state: "Solid", type: "Post-transition metal" },
  Fl: { symbol: "Fl", number: 114, name: "Flerovium", weight: 289, state: "Solid", type: "Post-transition metal" },
  Mc: { symbol: "Mc", number: 115, name: "Moscovium", weight: 288, state: "Solid", type: "Post-transition metal" },
  Lv: { symbol: "Lv", number: 116, name: "Livermorium", weight: 293, state: "Solid", type: "Post-transition metal" },
  Ts: { symbol: "Ts", number: 117, name: "Tennessine", weight: 294, state: "Solid", type: "Halogen" },
  Og: { symbol: "Og", number: 118, name: "Oganesson", weight: 294, state: "Gas", type: "Noble gas" },
};
document.getElementById('inputText').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchElements();  // Trigger the button click
  }
});



function searchElements() {
  const input = document.getElementById("inputText").value.toLowerCase();
  let resultHTML = '';
  let i = 0;

  while (i < input.length) {
    if (i + 1 < input.length) {
      const twoChars = input[i].toUpperCase() + input[i + 1];
      if (elements[twoChars]) {
        resultHTML += `
          <div class="symbol-box" onclick="showElementDetails('${twoChars}')">
            <div class="atomic-number">${elements[twoChars].number}</div>
            <div class="element-symbol">${twoChars}</div>
            <div class="element-name">${elements[twoChars].name}</div>
          </div>`;
        i += 2;
        continue;
      }
    }

    const oneChar = input[i].toUpperCase();
    if (elements[oneChar]) {
      resultHTML += `
          <div class="symbol-box" onclick="showElementDetails('${oneChar}')">
            <div class="atomic-number">${elements[oneChar].number}</div>
            <div class="element-symbol">${oneChar}</div>
            <div class="element-name">${elements[oneChar].name}</div>
          </div>`;
    } else {
      resultHTML += `<span class="normal-text">${input[i]}</span>`;
    }
    i++;
  }

  document.getElementById("output").innerHTML = resultHTML;
}

function showElementDetails(symbol) {
  const element = elements[symbol];
  const modal = document.getElementById("elementModal");
  const modalDetails = document.getElementById("modalDetails");

  // Fill the modal with the element's details
  modalDetails.innerHTML = `
    <h2>${element.name} (${element.symbol})</h2>
    <p><strong>Atomic Number:</strong> ${element.number}</p>
    <p><strong>Type:</strong> ${element.type}</p>
    <p><strong>Physical State:</strong> ${element.physicalState}</p>
    <p><strong>About:</strong> ${element.article}</p>
  `;

  modal.style.display = "block"; // Show the modal
}

// Close modal when the user clicks on <span> (x)
document.querySelector(".close").onclick = function () {
  document.getElementById("elementModal").style.display = "none";
};

// Close modal when the user clicks outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("elementModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let index = 0;

window.onclick = function () {
  index++;
  console.log("Current Index:", index);
  // You can add any logic here that will execute when the index changes
};

