/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// STRINGA: (indicatori: " o ' o `)è una sequenza di elementi alfanumerici =>!una stringa non può mai iniziare con un numero
// NUMERI: valori numerici espressi in numeri arabi
// BOOLEAN VALUES: parametri binari di vero o falso => true||false
// NULL: assenza di valore /azzeremento di qualsiasi parametro
// UNDEFINED: parametro non definito, non specificato
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Elisa";
console.log("es. 2 -  il mio nome è", myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
const sum = num1 + num2;
console.log("es. 3 - la somma di num1+num2 è", sum);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12;
console.log("es. 4 - la variabile x è", x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Tomasi";
console.log("es. 5 - il mio cognome è", myName);
// --> questo è possibile perchè myName alla riga 20 è una variabile dichiarata con let

// const myName = Elisa;
// myName = Tomasi;
// console.log("il mio cognome è", myName);
// qui l'errore che da é "Identifier 'myName' has already been declared" perchè la variabile è dichiarata costante e non può dunque subire variazioni

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
const subtraction = x - y;
console.log("es. 6 - questa è una sottrazione tra x e y =", subtraction);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(
  "es. 7 - john e John non sono la stessa cosa quindi dire che sono uguali è",
  name1 === name2
);
console.log(
  "es. 7 - mentre dire che john e John sono diversi è",
  name1 !== name2
);

// console.log(
//   "extra se John fosse less than or equal di john cioè se fosse minisculo sarebbero uguali-questo è",
//   name2 <= name1
// );
// questo molto probabilmente è sbagliato e ci va un if statement
// if (name2 === name1) {
//   name2 = "john";
// }
// true;
// (forse così ma forse anche no)
