/* Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */

const arrayNew = []

while (arrayNew.length < 6) {
  const numbers = Number.parseInt(prompt('Scrivi un numero'), 10)

  if (numbers % 2 == 1) {
    arrayNew.push(numbers)
  }
  console.log(arrayNew)
}