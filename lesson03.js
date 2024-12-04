// Argomenti della lezione
// Math

// If else

// Switch

// Introduzione sui cicli: while, whilde do, for

// Oggetto Math
// .max()
// .min()

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// console.log(Math.max(num1, num2, num3));

// .round()
// .random()
// .floor()
// .ceil()

// .round(): formattare i numeri con molte cifre decimali
// Arrotonda al numero intero PIU' vicino
// let num = 40.5;
// console.log(Math.round(num));

// .floor(): formatta i numeri per DIFETTO
// console.log(Math.floor(num));

// .ceil(): formatta i numeri per ECCESSO
// console.log(Math.ceil(num));

// .random(): può non prendere parametri
// Ci permette di creare un numero random fra 0 e 1

// Numero random da 0 a 100
// let max = 100;
// console.log(Math.round(Math.random() * max));

// Simuliamo il lancio di un dado
// Numeri del dado: da 1 a 6
// console.log(Math.round(Math.random() * 5) + 1);
// let min = 1;
// let max = 6;

// console.log(Math.round(Math.random() * (max - min)) + min);

// Controllo del flusso
// If else
// else if
// switch

// let num = 6;

// if -> SE
// else if -> ALTRIMENTI SE
// else -> ALTRIMENTI

// if (num < 5) {
//   // fai qualcosa
// } else if () {
//   // fai un altra cosa
// }

// const PASSWORD = "Aulab";
// const PASSWORD_VECCHIA = "AulaB";

// let userPassword = prompt("Inserisci una password");

// if (userPassword == PASSWORD) {
//   console.log("Sei loggato");
// } else if (userPassword == PASSWORD_VECCHIA) {
//   console.log("Attenzione: stai usando una password scaduta");
// } else {
//   console.log("Attenzione: email");
// }

let cocaCola = "1";
let estaThe = "2";
let birra = "3";
let vino = "4";

// let sceltaUtente = prompt(
//   "Che bevanda vuoi bere? \n 1. Coca Cola \n 2. Estathè \n 3. Birra \n 4. Vino \n Scrivi un numero"
// );

// if (sceltaUtente == cocaCola) {
//   console.log("Ecco la tua coca cola");
// } else if (sceltaUtente == estaThe) {
//   console.log("Ecco il tuo estathe");
// } else if (sceltaUtente == birra) {
//   console.log("Ecco la tua birra");
// } else if (sceltaUtente == vino) {
//   console.log("Ecco il vino");
// } else {
//   console.log("Il prodotto non è presente");
// }

// Switch
// if-else concatenati

// switch (sceltaUtente) {
//   case cocaCola:
//     console.log("Ecco la tua coca cola");
//     break;
//   case estaThe:
//     console.log("Ecco il tuo estathe");
//     break;

//   default:
//     break;
// }

// let a = 5;
// let b = 3;

// Operatore TERNARIO
// ? -> vero?
// : -> altrimenti
// se la condizione è vera, esito1, altrimenti esito2
// (condizione ? esito1 : esito2)
// console.log(
//   sceltaUtente == cocaCola ? "Ecco la tua coca cola" : null
// );

// let esito = sceltaUtente == cocaCola ? "sadas" : null;

// if (1 < 2) {

// }

// Cicli
// 3 tipi di cicli: for, while, while do

// Ciclo while
// Mentre la condizione è vera, fai qualcosa
let valore = "Contengo testo"; // Valore truthy

let valoreNonValido = 0; // Valore falsy

if (valore) {
  // QUESTO VERRA ESEGUITO
}

if (valoreNonValido) {
  // QUESTO NON VERRA ESEGUITO
}
