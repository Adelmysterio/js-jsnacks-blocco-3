const randomArray = [];

const numeroUtente = Number.parseInt(prompt('Scrivi un numero'), 10);

for (let i = 0; i < numeroUtente; i++) {

    let numeroRandom = Math.floor(Math.random() * 100) + 1;

    randomArray.push(numeroRandom);

}

console.log(randomArray)

const numeroStampe = Number.parseInt(prompt('Scrivi quanti numeri vuoi stampare'), 10);

if (numeroUtente >= numeroStampe) {
    
    console.log(randomArray.slice(-(numeroStampe)))
}

else {
    console.log(randomArray)
}