 const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

frigorifero.push('pesca')

for (let i = 0; i < frigorifero.length; i++) {

    if (frigorifero[i] === 'cocomero') {
        console.log("Trovato! Devo solo preparare il cocktail.")
    }

}

