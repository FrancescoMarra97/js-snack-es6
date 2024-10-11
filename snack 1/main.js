/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

const biciclette = [
    { 
        nome: "Bianchi",
        peso: 8 
    },
    {
         nome: "Trek", 
         peso: 7.5 
    },
    { 
        nome: "Cannondale", 
        peso: 7.8 
    },
    { 
        nome: "Specialized", 
        peso: 6.9 
    },
    { 
        nome: "Pinarello", 
        peso: 7.3 
    }
];
//inizializzo una variabile con il peso della prima bici per confrontarla
let pesoMin=biciclette[0].peso;

for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso<pesoMin) {
        pesoMin=biciclette[i].peso;
    }
    
}
console.log(pesoMin);

const resultEl = document.getElementById("result")
resultEl.innerText= `la bici più leggera è ${pesoMin.nome} con il peso di: ${pesoMin}`