/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro. */

const arrayA = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

const arrayB = ['banana', 'mela', 'pera', 'ciliegia', 'arancia'];

while (arrayA.length > arrayB.length) {

    let sottrazione = arrayA.length - arrayB.length;

    for (let i = 0; i < sottrazione; i++) {    
        arrayB.push(i + 1);
    };

    console.log(arrayA, arrayB);
}

while (arrayB.length > arrayA.length) {

    let sottrazione = arrayB.length - arrayA.length;

    for (let i = 0; i < sottrazione; i++) {    
        arrayA.push(i + 1);
    };

    console.log(arrayA, arrayB);
}

