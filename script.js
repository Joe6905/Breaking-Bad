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
   H: { symbol: "H", number: 1, name: "Hydrogen" },
      He: { symbol: "He", number: 2, name: "Helium" },
      Li: { symbol: "Li", number: 3, name: "Lithium" },
      Be: { symbol: "Be", number: 4, name: "Beryllium" },
      B: { symbol: "B", number: 5, name: "Boron" },
      C: { symbol: "C", number: 6, name: "Carbon" },
      N: { symbol: "N", number: 7, name: "Nitrogen" },
      O: { symbol: "O", number: 8, name: "Oxygen" },
      F: { symbol: "F", number: 9, name: "Fluorine" },
      Ne: { symbol: "Ne", number: 10, name: "Neon" },
      Na: { symbol: "Na", number: 11, name: "Sodium" },
      Mg: { symbol: "Mg", number: 12, name: "Magnesium" },
      Al: { symbol: "Al", number: 13, name: "Aluminum" },
      Si: { symbol: "Si", number: 14, name: "Silicon" },
      P: { symbol: "P", number: 15, name: "Phosphorus" },
      S: { symbol: "S", number: 16, name: "Sulfur" },
      Cl: { symbol: "Cl", number: 17, name: "Chlorine" },
      Ar: { symbol: "Ar", number: 18, name: "Argon" },
      K: { symbol: "K", number: 19, name: "Potassium" },
      Ca: { symbol: "Ca", number: 20, name: "Calcium" },
      Sc: { symbol: "Sc", number: 21, name: "Scandium" },
      Ti: { symbol: "Ti", number: 22, name: "Titanium" },
      V: { symbol: "V", number: 23, name: "Vanadium" },
      Cr: { symbol: "Cr", number: 24, name: "Chromium" },
      Mn: { symbol: "Mn", number: 25, name: "Manganese" },
      Fe: { symbol: "Fe", number: 26, name: "Iron" },
      Co: { symbol: "Co", number: 27, name: "Cobalt" },
      Ni: { symbol: "Ni", number: 28, name: "Nickel" },
      Cu: { symbol: "Cu", number: 29, name: "Copper" },
      Zn: { symbol: "Zn", number: 30, name: "Zinc" },
      Ga: { symbol: "Ga", number: 31, name: "Gallium" },
      Ge: { symbol: "Ge", number: 32, name: "Germanium" },
      As: { symbol: "As", number: 33, name: "Arsenic" },
      Se: { symbol: "Se", number: 34, name: "Selenium" },
      Br: { symbol: "Br", number: 35, name: "Bromine" },
      Kr: { symbol: "Kr", number: 36, name: "Krypton" },
      Rb: { symbol: "Rb", number: 37, name: "Rubidium" },
      Sr: { symbol: "Sr", number: 38, name: "Strontium" },
      Y: { symbol: "Y", number: 39, name: "Yttrium" },
      Zr: { symbol: "Zr", number: 40, name: "Zirconium" },
      Nb: { symbol: "Nb", number: 41, name: "Niobium" },
      Mo: { symbol: "Mo", number: 42, name: "Molybdenum" },
      Tc: { symbol: "Tc", number: 43, name: "Technetium" },
      Ru: { symbol: "Ru", number: 44, name: "Ruthenium" },
      Rh: { symbol: "Rh", number: 45, name: "Rhodium" },
      Pd: { symbol: "Pd", number: 46, name: "Palladium" },
      Ag: { symbol: "Ag", number: 47, name: "Silver" },
      Cd: { symbol: "Cd", number: 48, name: "Cadmium" },
      In: { symbol: "In", number: 49, name: "Indium" },
      Sn: { symbol: "Sn", number: 50, name: "Tin" },
      Sb: { symbol: "Sb", number: 51, name: "Antimony" },
      Te: { symbol: "Te", number: 52, name: "Tellurium" },
      I: { symbol: "I", number: 53, name: "Iodine" },
      Xe: { symbol: "Xe", number: 54, name: "Xenon" },
      Cs: { symbol: "Cs", number: 55, name: "Cesium" },
      Ba: { symbol: "Ba", number: 56, name: "Barium" },
      La: { symbol: "La", number: 57, name: "Lanthanum" },
      Ce: { symbol: "Ce", number: 58, name: "Cerium" },
      Pr: { symbol: "Pr", number: 59, name: "Praseodymium" },
      Nd: { symbol: "Nd", number: 60, name: "Neodymium" },
      Pm: { symbol: "Pm", number: 61, name: "Promethium" },
      Sm: { symbol: "Sm", number: 62, name: "Samarium" },
      Eu: { symbol: "Eu", number: 63, name: "Europium" },
      Gd: { symbol: "Gd", number: 64, name: "Gadolinium" },
      Tb: { symbol: "Tb", number: 65, name: "Terbium" },
      Dy: { symbol: "Dy", number: 66, name: "Dysprosium" },
      Ho: { symbol: "Ho", number: 67, name: "Holmium" },
      Er: { symbol: "Er", number: 68, name: "Erbium" },
      Tm: { symbol: "Tm", number: 69, name: "Thulium" },
      Yb: { symbol: "Yb", number: 70, name: "Ytterbium" },
      Lu: { symbol: "Lu", number: 71, name: "Lutetium" },
      Hf: { symbol: "Hf", number: 72, name: "Hafnium" },
      Ta: { symbol: "Ta", number: 73, name: "Tantalum" },
      W: { symbol: "W", number: 74, name: "Tungsten" },
      Re: { symbol: "Re", number: 75, name: "Rhenium" },
      Os: { symbol: "Os", number: 76, name: "Osmium" },
      Ir: { symbol: "Ir", number: 77, name: "Iridium" },
      Pt: { symbol: "Pt", number: 78, name: "Platinum" },
      Au: { symbol: "Au", number: 79, name: "Gold" },
      Hg: { symbol: "Hg", number: 80, name: "Mercury" },
      Tl: { symbol: "Tl", number: 81, name: "Thallium" },
      Pb: { symbol: "Pb", number: 82, name: "Lead" },
      Bi: { symbol: "Bi", number: 83, name: "Bismuth" },
      Po: { symbol: "Po", number: 84, name: "Polonium" },
      At: { symbol: "At", number: 85, name: "Astatine" },
      Rn: { symbol: "Rn", number: 86, name: "Radon" },
      Fr: { symbol: "Fr", number: 87, name: "Francium" },
      Ra: { symbol: "Ra", number: 88, name: "Radium" },
      Ac: { symbol: "Ac", number: 89, name: "Actinium" },
      Th: { symbol: "Th", number: 90, name: "Thorium" },
      Pa: { symbol: "Pa", number: 91, name: "Protactinium" },
      U: { symbol: "U", number: 92, name: "Uranium" },
      Np: { symbol: "Np", number: 93, name: "Neptunium" },
      Pu: { symbol: "Pu", number: 94, name: "Plutonium" },
      Am: { symbol: "Am", number: 95, name: "Americium" },
      Cm: { symbol: "Cm", number: 96, name: "Curium" },
      Bk: { symbol: "Bk", number: 97, name: "Berkelium" },
      Cf: { symbol: "Cf", number: 98, name: "Californium" },
      Es: { symbol: "Es", number: 99, name: "Einsteinium" },
      Fm: { symbol: "Fm", number: 100, name: "Fermium" },
      Md: { symbol: "Md", number: 101, name: "Mendelevium" },
      No: { symbol: "No", number: 102, name: "Nobelium" },
      Lr: { symbol: "Lr", number: 103, name: "Lawrencium" },
      Rf: { symbol: "Rf", number: 104, name: "Rutherfordium" },
      Db: { symbol: "Db", number: 105, name: "Dubnium" },
      Sg: { symbol: "Sg", number: 106, name: "Seaborgium" },
      Bh: { symbol: "Bh", number: 107, name: "Bohrium" },
      Hs: { symbol: "Hs", number: 108, name: "Hassium" },
      Mt: { symbol: "Mt", number: 109, name: "Meitnerium" },
      Ds: { symbol: "Ds", number: 110, name: "Darmstadtium" },
      Rg: { symbol: "Rg", number: 111, name: "Roentgenium" },
      Cn: { symbol: "Cn", number: 112, name: "Copernicium" },
      Nh: { symbol: "Nh", number: 113, name: "Nihonium" },
      Fl: { symbol: "Fl", number: 114, name: "Flerovium" },
      Mc: { symbol: "Mc", number: 115, name: "Moscovium" },
      Lv: { symbol: "Lv", number: 116, name: "Livermorium" },
      Ts: { symbol: "Ts", number: 117, name: "Tennessine" },
      Og: { symbol: "Og", number: 118, name: "Oganesson" }
      // ... more elements
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

      // Display the result in the output container
      document.getElementById("output").innerHTML = resultHTML;
    } 
document.getElementById("inputText").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchElements();
  }
});
