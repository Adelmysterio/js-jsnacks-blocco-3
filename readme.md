<!-- !Lista -->
<!-- Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!" -->

creo un array frutta nel frigo 
aggiungo pesca con .push
creo un ciclo for che scorra gli elementi all'interno del array 
     pongo la condizione in cui se un elemento del array e' uguale alla stringa cocomero stampa "Trovato! Devo solo preparare il cocktail."
     altrimenti stampa "Oh no, devo uscire a comprare il cocomero!"

<!--! Tail -->
<!-- Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array -->

creo un array vuoto 
chiedo all' utente un numero
creo un ciclo for in relazione al numero del utente
      dichiaro una variabile = ad un numero da 1 a 100 usando math random
      aggiungi quel numero al array .push
      chiedo alla console gli ultimi 5 numero del array

<!--! Bonus -->
<!-- Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. -->

creo arrayA con x elementi
creo arrayB con y elementi
se arrayA.legth>arrayB.lenght allora 
     ciclo for fino a A.length-B.lenght
        aggiungi un elemento al arrayB
se arrayB.legth>arrayA.lenght allora 
     ciclo for fino a B.length-A.lenght
        aggiungi un elemento al arrayA