const outputspesa = document.getElementById('outputspesa');

let counter = 0;

const listaSpesa = [
  `Burro Arachidi`,
  `Mandorle`,
  `Yougurt Greco`,
  `Noci`,
  `Mandorle`,
  `Avocado`,
];

outputspesa.innerHTML = '';

//Ciclo While con counter
while (counter < listaSpesa.length) {
  const item = listaSpesa[counter];
  outputspesa.innerHTML += `<li>${item}</li>`;
  counter++;
  console.log(item);
}
