// Cicli

// Ciclo while

// finchè la condizione è vera, lui eseguirà il codice
// while(n < 5) {

//}

// let n = 100;

// while (n < 5) {
//   console.log(n, "while");
//   n++;
// }

//Ciclo do-while

// do {

// } while ();

// console.log(n);

// Ciclo for
// for (dichiarazione di una variabile,
// continua fino a quando non soddisfi la condizione,
// comportamento della variabile)
// const PASSWORD = "password";

// for (let i = 0; userPassword == PASSWORD; i++) {
//   let userPassword = prompt("Inserisci una password");
//   let counter = 0;

//   if (userPassword != PASSWORD) {
//     counter++;
//     console.log("Hai sbagliato la password.");
//   } else {
//     console.log("Login avvenuto con successo");
//     break;
//   }
// }

// Funzioni (metodi): blocchi di codice che vanno ri-eseguiti
// Parametri: dati che passiamo alla funzione
// let user;
// // Dichiarazione di una funzione
// function loginAsync(mail, password) {
//   let user; // Chiamata HTTP
//   return user;
// }

// // Chiamo la funzione: la eseguo
// user = loginAsync();
// console.log(`Benvenuto su Microsoft 365, ${user.Name}`);

// Arrow function =>
// Può essere una funzione anonima
// () => {

// }
// let somma;

// La freccia ha un RETURN implicito    return
// function sommaNumeri(num1, num2) {
//   somma = num1 + num2;
// }

// let somma;

// const sommaDueNumeri = (num1, num2) => num1 + num2;

// Scope
// Globale: dichiaro una variabile nel foglio
// Locale: dichiaro una variabile dentro una funzione/for/if/ecc

// console.log(sommaDueNumeri(5, 10));
// console.log(somma);
// console.log("La somma dei numeri è " + somma);

// Array = "Lista"
// Lista ORDINATA di elementi, ordinata perchè ha un INDICE
// L'indice parte da 0

let utenti = ["Jader", "Simone", "Laura", "Ludovico"];

utenti.push("Francesco");

console.log(utenti);

// utenti[utenti.length - 1] = "Matteo";
// console.log(utenti[utenti.length - 1]);
