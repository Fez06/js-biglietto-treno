'use strict';


//chiedo all' utente quanti km deve percorrere con un prompt trovando cosi' la variabile 1

const kmUtente= parseInt(prompt('Quanti km deve percorrere?'));

//chiedo all' utente quanti anni ha con un prompt trovando cosi' la variabile 2

const etaUtente= parseInt(prompt('Quanti anni ha?'));

//ottengo la costante del prezzo base moltiplicando i km per il prezzo/km

let prezzoBaseTragitto = kmUtente * 0.21;
console.log(prezzoBaseTragitto);

//ora, a seconda dell'eta' forniro' il prezzo con la scontistica giusta se presente o quello base con sole due cifre decimali

if (etaUtente < 18) {
    console.log(`per te al prezzo agevolato di ${prezzoBaseTragitto * 0.8}€`)
} else if (etaUtente > 65) {
    console.log(`per lei al prezzo agevolato di ${prezzoBaseTragitto * 0.6}€`)
} else {
    console.log(`per lei alla tariffa standard di ${prezzoBaseTragitto}€`)
}

