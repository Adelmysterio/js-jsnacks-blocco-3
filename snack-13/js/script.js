// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

const userNumber = prompt('scrivi un numero') /* Number.BigInt(prompt('Scrivi un numero'), 10); */

function reverse(number) {
    let ArrayNumber = number.split('')
    ArrayNumber = ArrayNumber.reverse()
    console.log(ArrayNumber.join())
}

reverse(userNumber)