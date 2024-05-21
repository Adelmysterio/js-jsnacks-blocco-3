// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userSeconds = Number.parseInt(prompt('Scrivi un numero di secondi da attendere'), 10)

let clock = setInterval(function () {

    userSeconds -= 1
    console.log(userSeconds)

    if (userSeconds <= 0) {
        clearInterval(clock)
    }
    
}, 1000)
