// Condizioni

// if-else

// modo di utilizzare truthy/falsy
// if (user.age) {
//   console.log("Valore falsy");
// }

// console.log(user.age >= 18 ? "L'utente può entrare" : "L'utente non può entrare");

// else if (user.isMember) {
//   console.log(`Utente ${user.nome} può entrare`);
// } else {
//   console.log(`Utente ${user.nome} non può entrare`);
// }

// Truthy e Falsy
// Valori falsy: "" (stringhe vuote), null, 0, undefined, NaN
// Valori truthy: stringhe valorizzate, oggetti NON vuoti

// Dentro "key", andrò a mettere la variabile su cui voglio lavorare
// switch (key) {
//     case value:
// blocco di codice
//         break;

//     default:
//         break;
// }

// switch (user.age) {
//   case 1:
//     console.log("Ciao");
//     break;
//   case 18:
//     console.log("L'utente può entrare");
//     break;
//   default:
//     break;
// }

// switch (true) {
//   case user.age > 18:
//     console.log("L'utente può entrare");
//     break;
//   case user.isMember:
//     console.log("L'utente può entrare");
//     break;
//   default:
//     console.log("L'utente non può entrare");
//     break;
// }

//////////////////////////////////// Cicli
// Ci servono per eseguire un azione più volte
// 3 tipi di cicli: for, while, do while

// while: MENTRE
// while (condition) {

// }

// while (num < 20) {
//   // Operatore modulo per capire se un numero è pari o dispari
//   if (num % 2 == 0) {
//     sum += num;
//   }

//   num++;
// }

//

// do while
// Ci garantisce l'esecuzione del codice almeno una volta
// Esegue il codice, dopo controlla la condizione

// let num = 21;
// let sum = 0;

// do {
//   if (num % 2 == 0) {
//     sum += num;
//   }

//   num++;
// } while (num < 20);

// console.log(sum);

// let users = ["Simone", "", "Luisa", "Laura", "Nicola"];

// ciclo for
// Dichiarazione dell'indice, condizione per proseguire, incremento/decremento della variabile
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (const user in users) {
//   console.log(user);
// }

// function sommaNumeri(num1, num2) {
//   return num1 + num2;
// }

// const sumNumbers = (num1, num2) => num1 + num2;

// qualcosa.metodo("POST", () => {

// })

// break, continue
// break: ci fa uscire dal ciclo
// continue: ci fa saltare quel giro del ciclo

// for (let index = 0; index < 20; index++) {
//   let somma = 0;

//   if (index == 3) continue;
//   if (index == 5) break;

//   somma += index;
//   console.log(somma);
// }

/////////////////////// Funzioni
// Cos'è: una funzione è un blocco di codice che incapsuliamo e decidiamo noi quando eseguire
// esempio: login, utente che clicca sui filtri di un ecommerce, ecc

// Dichiarazione di una funzione
// function login(email, password) {
//   // Corpo della funzione
//   // (codice da eseguire)
// }

//////////////////////////////////////////////
// Per eseguire la funzione, la devo invocare
//////////////////////////////////////////////
// nomeFunzione("ciao");

// const arrowFunction = () => {
//   // Codice da eseguire
// };

// => è un Return Implicito

// Parametri input e output

// parametro in input => fase di dichiarazione e invocazione della funzione
// (parametro)

// parametro in output
// return

// function login(email, password) {
//     let user = // Chiamata al backend

//     // 404

//     // 500 => internal server error

//     return user;
//   }

//   const user = login("", "")

////////////////////// Parametri
/////////// Parametri di default

// function greet(name = "Francesco") {
//   console.log(`Ciao ${name}`);
// }

// greet("Adriana");
// greet();

/////////////////////////// Array
// Dati strutturali != primitivi
// Un array è una sequenza ORDINATA di elementi
// Gli array hanno un indice, che parte da 0

// let numbers = [1, 2, 3, 4, 5];

// numbers[2] = "Hackademy";

// console.log(numbers);

//////////////////////////////////// Metodi degli array

// for (let index = 0; index < numbers.length; index++) {
//   //   console.log(numbers[index]);
// }

// .forEach(): alternativa (compatta) del ciclo for
// Parametro: singolo elemento all'interno dell'array, indice NON obbligatorio
// numbers.forEach((number, index) => console.log(number, index));

// let products = [
//   { name: "Scarpe", price: 99.0 },
//   { name: "telefono", price: 800 },
//   { name: "Scarpe da sci", price: 200 },
// ];

// console.log(products);
// console.log(...products);

// .map(): cicla all'interno dell'array e ne fa un operazione, restituendoci un nuovo array
// function discountProducts(array) {
//   return array.map((prod) => (prod.price -= (prod.price * 20) / 100));
// }

// let newArray = discountProducts(products);
// console.log(newArray);

// Spread operator "..."
// products[0] = {
//   ...products[0],
//   isScontato: true,
// };

// console.log(products);
