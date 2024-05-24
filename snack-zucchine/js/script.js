// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varieta: 'nera',
        peso: .124,
        lunghezza: 15
    },
    {
        varieta: 'romana',
        peso: .088,
        lunghezza: 7
    },
    {
        varieta: 'napoletana',
        peso: .243,
        lunghezza: 18
    },
    {
        varieta: 'fiorentina',
        peso: .100,
        lunghezza: 10
    },
    {
        varieta: 'tonda',
        peso: .069,
        lunghezza: 4
    },
    {
        varieta: 'trombetta',
        peso: .189,
        lunghezza: 15
    },
    {
        varieta: 'trombetta',
        peso: .133,
        lunghezza: 12
    },
    {
        varieta: 'nera',
        peso: .124,
        lunghezza: 9
    },
    {
        varieta: 'tonda',
        peso: .050,
        lunghezza: 1
    },
    {
        varieta: 'nera',
        peso: .435,
        lunghezza: 25
    },
]

/* let peso = somma(zucchine.peso)

function somma(numbers) {
    let sum
    sum += numbers
    return sum
} */


let pesoTotale = 0;
let zucchineLunghe = [];
let zucchineCorte = [];

zucchine.forEach(zucchina => {
    pesoTotale += zucchina.peso;
    if (zucchina.lunghezza > 8) {
        zucchineLunghe.push(zucchina)
    }
    else {
        zucchineCorte.push(zucchina)
    }
});

console.log('Il peso totale delle zucchine è:', pesoTotale, 'kg');

