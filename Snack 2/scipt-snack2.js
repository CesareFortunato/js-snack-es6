/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// VARIABLES

// variabile array con squadre

const squadreCalcio = [
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Lazio", punti: 0, falliSubiti: 0 }
];


// SYSTEM

for (let index = 0; index < squadreCalcio.length; index++) {
    
    
}




// FUNCTIONS

// creo una funzione per generare numeri random

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}