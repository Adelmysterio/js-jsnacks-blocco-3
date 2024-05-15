 const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frigorifero.push('pesca');

let found = false;

for (let i = 0; i < frigorifero.length; i++) {

    if (frigorifero[i] === 'cocomero') {
        found = true
    }
    
};

if (found=true) {
    console.log("Trovato! Devo solo preparare il cocktail.")
}
else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
};
