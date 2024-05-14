const randomArray = [];

const numeroUtente = Number.parseInt(prompt('Scrivi un numero'), 10);

for (let i = 0; i < numeroUtente; i++) {

    let numeroRandom = Math.floor(Math.random() * 100) + 1;

    randomArray.push(numeroRandom);

}

console.log(randomArray)

if (numeroUtente >= 5) {
    
    console.log(randomArray.slice(-5))
}

else {
    console.log(randomArray)
}