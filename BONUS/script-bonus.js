/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */


// creo l'array di 10 zucchine

const listaZucchine = [
    { nome: "Zucchina Verde", peso: 0.5, lunghezza: 15 },
    { nome: "Zucchina Striata", peso: 0.8, lunghezza: 18 },
    { nome: "Zucchina Nera", peso: 0.6, lunghezza: 16 },
    { nome: "Zucchina Gialla", peso: 0.7, lunghezza: 17 },
    { nome: "Zucchina Romana", peso: 0.9, lunghezza: 20 },
    { nome: "Zucchina Baby", peso: 0.3, lunghezza: 12 },
    { nome: "Zucchina Tonda", peso: 1.0, lunghezza: 22 },
    { nome: "Zucchina Lunga", peso: 0.4, lunghezza: 25 },
    { nome: "Zucchina Spessa", peso: 1.2, lunghezza: 19 },
    { nome: "Zucchina Baby Striata", peso: 0.35, lunghezza: 13 }
];


// creo due array che popolo in base alla lunghezza delle zucchine

const zucchineCorte = [];
const zucchineLunghe = [];

// creo due variabili per il peso delle zucchine

let pesoCorte = 0;
let pesoLunghe = 0;

// SYSTEM

// divido le zucchine in base alla lunghezza nei due array

for (let index = 0; index < listaZucchine.length; index++) {
    const zucchina = listaZucchine[index];
    if(listaZucchine[index].lunghezza <= 15){
        zucchineCorte.push(zucchina);    
    }
    else{
        zucchineLunghe.push(zucchina);
    }
    
}

console.log("queste sono le zucchine corte: ", zucchineCorte);
console.log("queste sono le zucchine lunghe: ", zucchineLunghe);

// sommo il peso delle zucchine dei due array

for (let index = 0; index < zucchineCorte.length; index++) {
    pesoCorte = pesoCorte + zucchineCorte[index].peso;    
}

for (let index = 0; index < zucchineLunghe.length; index++) {
    pesoLunghe = pesoLunghe + zucchineLunghe[index].peso;    
}

console.log("questo è il peso delle corte: ", pesoCorte);
console.log("questo è il peso delle lunghe: ", pesoLunghe);

