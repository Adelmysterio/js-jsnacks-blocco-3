/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50. */

const arrayNew = [];

let somma = 0;

while (somma < 50) {
    let numbers = Number.parseInt(prompt('Scrivi un numero'), 10);

    if (Number.isNaN(numbers) !== true) {
        arrayNew.push(numbers);
        somma += numbers
    }
}

console.log(arrayNew, somma)