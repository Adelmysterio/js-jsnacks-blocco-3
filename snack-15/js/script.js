/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla. */

const palla = {
    nome : 'palla',
    peso : 10
}


let pesoPalla = prompt("scrivi il peso della palla")
palla.peso = pesoPalla
console.log(palla)