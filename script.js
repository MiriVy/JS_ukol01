let stupneFahr = Number(prompt("Zadej teplotu ve °F: "))
let prevodNaCelsia = Math.round(5 * (stupneFahr - 32) / 9)

document.body.innerHTML = "Zadané °F odpovídají: " + prevodNaCelsia + " °C"