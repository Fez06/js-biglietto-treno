'use strict';


//chiedo all' utente quanti km deve percorrere con un prompt trovando cosi' la variabile 1

const kmUtente= Number(prompt('Quanti km deve percorrere?'));

//chiedo all' utente quanti anni ha con un prompt trovando cosi' la variabile 2

const etaUtente= Number(prompt('Quanti anni ha?'));

//ottengo la costante del prezzo base moltiplicando i km per il prezzo/km

let prezzoBaseTragitto =`('kmUtente' * 0,21)`;
console.log(prezzoBaseTragitto);