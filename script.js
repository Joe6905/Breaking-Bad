function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

    // Your elements object here
  const elements = {
  H: { symbol: "H", number: 1, name: "Hydrogen", description: "Lightest element, used in fuel cells and balloons." },
  He: { symbol: "He", number: 2, name: "Helium", description: "Inert gas, used in balloons and cryogenics." },
  Li: { symbol: "Li", number: 3, name: "Lithium", description: "Soft metal, used in batteries and mood stabilizers." },
  Be: { symbol: "Be", number: 4, name: "Beryllium", description: "Rare metal, used in aerospace and nuclear reactors." },
  B: { symbol: "B", number: 5, name: "Boron", description: "Used in glassmaking and detergents." },
  C: { symbol: "C", number: 6, name: "Carbon", description: "Essential element of life, found in all organic compounds." },
  N: { symbol: "N", number: 7, name: "Nitrogen", description: "Major component of the Earth's atmosphere." },
  O: { symbol: "O", number: 8, name: "Oxygen", description: "Essential for respiration, used in medical applications." },
  F: { symbol: "F", number: 9, name: "Fluorine", description: "Highly reactive, used in toothpaste and refrigeration." },
  Ne: { symbol: "Ne", number: 10, name: "Neon", description: "Used in neon signs and high-voltage indicators." },
  Na: { symbol: "Na", number: 11, name: "Sodium", description: "Highly reactive, found in table salt." },
  Mg: { symbol: "Mg", number: 12, name: "Magnesium", description: "Light metal, used in alloys and fireworks." },
  Al: { symbol: "Al", number: 13, name: "Aluminum", description: "Lightweight metal, used in construction and packaging." },
  Si: { symbol: "Si", number: 14, name: "Silicon", description: "Used in electronics and glass manufacturing." },
  P: { symbol: "P", number: 15, name: "Phosphorus", description: "Used in fertilizers and matches." },
  S: { symbol: "S", number: 16, name: "Sulfur", description: "Used in fertilizers and chemical production." },
  Cl: { symbol: "Cl", number: 17, name: "Chlorine", description: "Disinfectant and key component of salt." },
  Ar: { symbol: "Ar", number: 18, name: "Argon", description: "Inert gas used in welding and lighting." },
  K: { symbol: "K", number: 19, name: "Potassium", description: "Essential nutrient, used in fertilizers." },
  Ca: { symbol: "Ca", number: 20, name: "Calcium", description: "Vital for bones, used in cement and lime." },
  Sc: { symbol: "Sc", number: 21, name: "Scandium", description: "Rare metal, used in aerospace materials." },
  Ti: { symbol: "Ti", number: 22, name: "Titanium", description: "Strong and lightweight, used in implants and aircraft." },
  V: { symbol: "V", number: 23, name: "Vanadium", description: "Used in steel alloys and catalysts." },
  Cr: { symbol: "Cr", number: 24, name: "Chromium", description: "Used in stainless steel and chrome plating." },
  Mn: { symbol: "Mn", number: 25, name: "Manganese", description: "Used in steelmaking and batteries." },
  Fe: { symbol: "Fe", number: 26, name: "Iron", description: "Essential for blood, used in construction." },
  Co: { symbol: "Co", number: 27, name: "Cobalt", description: "Used in batteries and alloys." },
  Ni: { symbol: "Ni", number: 28, name: "Nickel", description: "Used in coins, batteries, and alloys." },
  Cu: { symbol: "Cu", number: 29, name: "Copper", description: "Used in electrical wiring and plumbing." },
  Zn: { symbol: "Zn", number: 30, name: "Zinc", description: "Used in galvanization and alloys." },
  Ga: { symbol: "Ga", number: 31, name: "Gallium", description: "Used in semiconductors and LEDs." },
  Ge: { symbol: "Ge", number: 32, name: "Germanium", description: "Used in electronics and optics." },
  As: { symbol: "As", number: 33, name: "Arsenic", description: "Used in pesticides and semiconductors." },
  Se: { symbol: "Se", number: 34, name: "Selenium", description: "Used in photocopiers and glass manufacturing." },
  Br: { symbol: "Br", number: 35, name: "Bromine", description: "Used in flame retardants and photography." },
  Kr: { symbol: "Kr", number: 36, name: "Krypton", description: "Used in lighting and photography." },
     Rb: { symbol: "Rb", number: 37, name: "Rubidium", description: "Soft, reactive alkali metal." },
  Sr: { symbol: "Sr", number: 38, name: "Strontium", description: "Used in fireworks and flares." },
  Y: { symbol: "Y", number: 39, name: "Yttrium", description: "Used in LEDs and superconductors." },
  Zr: { symbol: "Zr", number: 40, name: "Zirconium", description: "Used in nuclear reactors." },
  Nb: { symbol: "Nb", number: 41, name: "Niobium", description: "Used in alloys and superconductors." },
  Mo: { symbol: "Mo", number: 42, name: "Molybdenum", description: "Used in steel alloys." },
  Tc: { symbol: "Tc", number: 43, name: "Technetium", description: "First artificially produced element." },
  Ru: { symbol: "Ru", number: 44, name: "Ruthenium", description: "Used in electronics and catalysts." },
  Rh: { symbol: "Rh", number: 45, name: "Rhodium", description: "Expensive metal used in jewelry." },
  Pd: { symbol: "Pd", number: 46, name: "Palladium", description: "Used in catalytic converters." },
  Ag: { symbol: "Ag", number: 47, name: "Silver", description: "Precious metal used in jewelry and coins." },
  Cd: { symbol: "Cd", number: 48, name: "Cadmium", description: "Used in batteries, toxic." },
  In: { symbol: "In", number: 49, name: "Indium", description: "Soft metal used in electronics." },
  Sn: { symbol: "Sn", number: 50, name: "Tin", description: "Used in solder and plating." },
  Sb: { symbol: "Sb", number: 51, name: "Antimony", description: "Used in flame retardants." },
  Te: { symbol: "Te", number: 52, name: "Tellurium", description: "Rare, used in alloys and semiconductors." },
  I: { symbol: "I", number: 53, name: "Iodine", description: "Essential for thyroid health." },
  Xe: { symbol: "Xe", number: 54, name: "Xenon", description: "Noble gas used in lighting and anesthesia." },
  Cs: { symbol: "Cs", number: 55, name: "Cesium", description: "Highly reactive alkali metal." },
  Ba: { symbol: "Ba", number: 56, name: "Barium", description: "Used in X-ray imaging." },
  La: { symbol: "La", number: 57, name: "Lanthanum", description: "Used in optics and electronics." },
  Hf: { symbol: "Hf", number: 72, name: "Hafnium", description: "Used in nuclear control rods." },
  Ta: { symbol: "Ta", number: 73, name: "Tantalum", description: "Resistant to corrosion, used in electronics." },
  W: { symbol: "W", number: 74, name: "Tungsten", description: "High melting point, used in filaments." },
  Re: { symbol: "Re", number: 75, name: "Rhenium", description: "Rare, used in jet engines." },
  Os: { symbol: "Os", number: 76, name: "Osmium", description: "Densest naturally occurring element." },
  Ir: { symbol: "Ir", number: 77, name: "Iridium", description: "Corrosion-resistant, used in pens and equipment." },
  Pt: { symbol: "Pt", number: 78, name: "Platinum", description: "Precious metal used in jewelry and catalysis." },
  Au: { symbol: "Au", number: 79, name: "Gold", description: "Precious metal used in jewelry and electronics." },
  Hg: { symbol: "Hg", number: 80, name: "Mercury", description: "Liquid metal, used in thermometers." },
  Tl: { symbol: "Tl", number: 81, name: "Thallium", description: "Used in electronics, toxic." },
  Pb: { symbol: "Pb", number: 82, name: "Lead", description: "Heavy metal used in batteries and shields." },
  Bi: { symbol: "Bi", number: 83, name: "Bismuth", description: "Used in cosmetics and pharmaceuticals." },
  Po: { symbol: "Po", number: 84, name: "Polonium", description: "Highly radioactive, rare." },
  At: { symbol: "At", number: 85, name: "Astatine", description: "Rare, radioactive halogen." },
  Rn: { symbol: "Rn", number: 86, name: "Radon", description: "Radioactive noble gas." },
  Fr: { symbol: "Fr", number: 87, name: "Francium", description: "Highly radioactive, short-lived." },
  Ra: { symbol: "Ra", number: 88, name: "Radium", description: "Radioactive, glows in the dark." },
  Ac: { symbol: "Ac", number: 89, name: "Actinium", description: "Radioactive, used in research." },
  Th: { symbol: "Th", number: 90, name: "Thorium", description: "Radioactive, used in reactors." },
  U: { symbol: "U", number: 92, name: "Uranium", description: "Radioactive, used in nuclear fuel." },
  Pu: { symbol: "Pu", number: 94, name: "Plutonium", description: "Radioactive, used in weapons and reactors." },
    Am: { symbol: "Am", number: 95, name: "Americium", description: "Synthetic, used in smoke detectors." },
  Cm: { symbol: "Cm", number: 96, name: "Curium", description: "Radioactive, used in scientific research." },
  Bk: { symbol: "Bk", number: 97, name: "Berkelium", description: "Synthetic, used in research." },
  Cf: { symbol: "Cf", number: 98, name: "Californium", description: "Radioactive, used in neutron radiography." },
  Es: { symbol: "Es", number: 99, name: "Einsteinium", description: "Synthetic, used in research." },
  Fm: { symbol: "Fm", number: 100, name: "Fermium", description: "Synthetic, used in scientific research." },
  Md: { symbol: "Md", number: 101, name: "Mendelevium", description: "Synthetic, used in research." },
  No: { symbol: "No", number: 102, name: "Nobelium", description: "Synthetic, used in research." },
  Lr: { symbol: "Lr", number: 103, name: "Lawrencium", description: "Synthetic, used in scientific research." },
  Rf: { symbol: "Rf", number: 104, name: "Rutherfordium", description: "Synthetic, used in research." },
  Db: { symbol: "Db", number: 105, name: "Dubnium", description: "Synthetic, used in scientific research." },
  Sg: { symbol: "Sg", number: 106, name: "Seaborgium", description: "Synthetic, used in research." },
  Bh: { symbol: "Bh", number: 107, name: "Bohrium", description: "Synthetic, used in research." },
  Hs: { symbol: "Hs", number: 108, name: "Hassium", description: "Synthetic, used in scientific research." },
  Mt: { symbol: "Mt", number: 109, name: "Meitnerium", description: "Synthetic, used in research." },
  Ds: { symbol: "Ds", number: 110, name: "Darmstadtium", description: "Synthetic, used in research." },
  Rg: { symbol: "Rg", number: 111, name: "Roentgenium", description: "Synthetic, used in research." },
  Cn: { symbol: "Cn", number: 112, name: "Copernicium", description: "Synthetic, used in scientific research." },
  Nh: { symbol: "Nh", number: 113, name: "Nihonium", description: "Synthetic, named after Japan." },
  Fl: { symbol: "Fl", number: 114, name: "Flerovium", description: "Synthetic, used in research." },
  Mc: { symbol: "Mc", number: 115, name: "Moscovium", description: "Synthetic, named after Moscow." },
  Lv: { symbol: "Lv", number: 116, name: "Livermorium", description: "Synthetic, named after Lawrence Livermore National Laboratory." },
  Ts: { symbol: "Ts", number: 117, name: "Tennessine", description: "Synthetic, named after Tennessee." },
  Og: { symbol: "Og", number: 118, name: "Oganesson", description: "Superheavy, synthetic, radioactive." },
};
  // Add remaining elements similarly...
};

      function searchElements() {
      const input = document.getElementById("inputText").value.toLowerCase();
      let resultHTML = '';
      let i = 0;

      while (i < input.length) {
        // Try to match two characters (for elements like Ba, Fe)
        if (i + 1 < input.length) {
          const twoChars = input[i].toUpperCase() + input[i + 1];
          if (elements[twoChars]) {
            resultHTML += `
              <div class="symbol-box">
                <div class="atomic-number">${elements[twoChars].number}</div>
                <div class="element-symbol">${twoChars}</div>
                <div class="element-name">${elements[twoChars].name}</div>
              </div>`;
            i += 2;
            continue;
          }
        }
        // Try to match one character (for elements like H, C)
        const oneChar = input[i].toUpperCase();
        if (elements[oneChar]) {
          resultHTML += `
              <div class="symbol-box">
                <div class="atomic-number">${elements[oneChar].number}</div>
                <div class="element-symbol">${oneChar}</div>
                <div class="element-name">${elements[oneChar].name}</div>
              </div>`;
        } else {
          resultHTML += `<span class="normal-text">${input[i]}</span>`;
        }
        i++; // Move to the next character
      }
        function showPopup(element) {
  // Create popup container
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Add content to popup
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-button" onclick="closePopup(this)">&times;</span>
      <h2>${element.name} (${element.symbol})</h2>
      <p><strong>Atomic Number:</strong> ${element.number}</p>
      <p>${element.description}</p>
    </div>
  `;

  // Append popup to the body
  document.body.appendChild(popup);
}

function closePopup(button) {
  const popup = button.closest(".popup");
  popup.remove();
}


      // Display the result in the output container
      document.getElementById("output").innerHTML = resultHTML;
    } 
document.getElementById("inputText").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchElements();
  }
});

