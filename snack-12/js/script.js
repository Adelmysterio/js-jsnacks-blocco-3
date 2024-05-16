// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaA = prompt('scrivi una parola');
const parolaB = prompt('scrivi una parola');

function checkLength (A, B) {

     if (A.length == B.length) {
        return A + ' ' + B
    }

     else if (A.length > B.length){
        return A
    }

    else if (B.length > A.length){
        return B
    }
};

const lunghezza = checkLength(parolaA, parolaB);

console.log(lunghezza);