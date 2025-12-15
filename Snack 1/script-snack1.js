/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// VARIABLES

// dichiaro l'array con tutte le bici e le loro proprietà

const listaBici = [
    { 'nome': "Bici da corsa", 'peso': 7.2 },
    { 'nome': "Mountain bike", 'peso': 12.5 },
    { 'nome': "Gravel", 'peso': 9.8 },
    { 'nome': "Bici elettrica", 'peso': 23.0 },
    { 'nome': "BMX", 'peso': 10.4 },
    { 'nome': "Bici da città", 'peso': 14.1 },
    { 'nome': "Bici pieghevole", 'peso': 11.6 }
]

// variabile globale per storare il peso più basso delle bici

/* let pesoBassoBici = 0; */  // questa soluzione mi darebbe problemi con valori negativi 

let biciLeggera = listaBici[0];

// ciclo for in cui prendo il peso di ogni singola bici e comparo il peso attuale con quello storato precedentemente

for (let index = 1; index < listaBici.length; index++) {

    // funziona ma è poco ottimizzato
    /* const bici = listaBici[index];

    

    const nuovoPesoBici = listaBici[index].peso;

    if (pesoBassoBici === 0 || pesoBassoBici >= nuovoPesoBici) {
        pesoBassoBici = nuovoPesoBici
    } */

    console.log("Bici attuale:", listaBici[index]);  // usa la virgola perchè col + forza l'obj a stringa

    // con if comparo direttamente gli oggetti, così posso stampare tutto l'oggetto bici

    if (listaBici[index].peso < biciLeggera.peso) {
        biciLeggera = listaBici[index];
    }
}


// output log della bici che pesa meno


console.log(`La bici più leggera è ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`);
