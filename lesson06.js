// Oggetti
// Dato strutturale
// Lista NON ordinata di elementi

// A cosa servono gli oggetti: rappresentare dei dati complessi con più proprietà

// let emptyObject = {};

// // Proprietà degli oggetti: chiave-valore

// let person = {
//   id: 1,
//   name: "Francesco",
//   dateOfBirth: "17/12/2000",
//   job: "Sviluppatore",
//   minor: false,
//   friends: [],
//   salutoCustom: function (nome) {
//     console.log("Ciao " + nome);
//   },
// };

// let product = {
//   price: 99,
//   name: "Scarpe",
// };

// // Accedo alle proprietà degli oggetti tramite Dot Syntax
// console.log(person.name);

// // Alternativa per accedere alle proprietà degli oggetti: la dicitura "ad array"
// console.log(person["name"]);

// console.log(person.salutoCustom("Francesco"));

// // Parola chiave fondamentale degli oggetti: this
// const car = {
//   brand: "BMW",
//   model: "Series 1",
//   description: function () {
//     console.log(`Questa è una ${this.brand}`);
//   },
// };

// let mercedes = {
//     brand: "Mercedes",
//     model: "Classe A",
//     description: function () {
//       console.log(`Questa è una ${this.brand}`);
//     },
//   };

// car.description();

// car.date = "17/12/2000";

// console.log(car.date);

// function getElementById(id) {
//     //////////
// }

///////////////////// Metodi degli array
// let numbers = [1, 2, 3, 4, 5];

// // for (let index = 0; index < numbers.length; index++) {
// //   console.log(numbers[index]);
// // }

// numbers.forEach((n, index) => {
//   console.log(n, index + 1);
// });
let mediumOldProducts = [
  { name: "Drone", price: 20, banned: false },
  { name: "Telefono", price: 18, banned: false },
  { name: "Macchina", price: 29, banned: false },
];

// people.forEach((person) => {
//     if (person.name == "Luisa") {
//         person.banned = true;
//     }
// });

// Spread Operator: ...people

// Copiare un array

// Unire due array
// let prodottiInSaldo = [...oldProducts, ...mediumOldProducts];

// console.log(prodottiInSaldo);

// .map(): crea un nuovo array applicando una funzione ad ogni elemento

// let numbers = [2, 4, 6];
// let doubleNumbers = numbers.map((n) => n * 2);

// console.log(numbers);
// console.log(doubleNumbers);

// let newArray = oldProducts.map(
//   (product) => (product.price = (product.price * 20) / 100)
// );

// console.log(oldProducts, "Prodotti originali");
// console.log(newArray, "Prodotti scontati");

// let products = [
//   { name: "Scarpe", price: 10, banned: true },
//   { name: "Sigarette", price: 18, banned: false },
//   { name: "Vino", price: 29, banned: false },
// ];

// // .filter(): filtra l'array sulla base di una condizione
// let lowPriceProducts = products.filter((p) => p.price < 19 && !p.banned);
// console.log(lowPriceProducts);

// let maggiorenni = ages.filter((age) => age >= 18);
// console.log(maggiorenni);

// .slice(): ci serve per estrarre una porzione dell'array, ci restituisce una copia dell'array
// parametro1: indice da cui partire, parametro2: a quale indice fermarsi (escluso)
// let newArray = ages.slice(1, 5);
// console.log(newArray);

// .splice(): ci serve per modificare un array, rimuovere o aggiungere elementi
// Rimuovere elementi da un array, indice da cui partire, quanto andare avanti
// ages.splice(1, 2);

// Aggiungere elementi: dai indice, inserisce elemento prima dell'indice
// ages.splice(1, 0, 100);
// console.log(ages);

// let nums = [3, 4];
// ages.splice(1, 2, ...nums);
// console.log(ages);

// .push(): aggiunge un elemento ALLA FINE di un array
// ages.push("Ciao");

// // .unshift() : aggiunge un elemento ALL'INIZIO di un array
// ages.unshift("Ciao");

// // .shift(): ci toglie il PRIMO elemento dell'array
// ages.shift();

// // .pop(): ci toglie l'ULTIMO elemento dell'array
// ages.pop();

// .reduce(): ci riduce l'array ad un unico valore
// Questo metodo va utilizzato solo quando manipoliamo dei numeri
// let totale = 0;

// for (let i = 0; i < prices.length; i++) {
//   totale += prices[i];
// }
// console.log(totale);

// let result = prices.reduce((accumulatore, p) => accumulatore + p);

// console.log(result);

// .sort(): serve per ordinare gli elementi di un array, va ad agire sull'array ORIGINALE
// Attenzione: ci sono due use cases, o con stringhe o con numeri
// In ordine alfabetico o di grandezza per i numeri (crescente/decrescente)
// prices.sort((a, b) => a - b);

// a - b ordine CRESCENTE
// b - a ordine DECRESCENTE
let prices = [22, 39, 84, 12];

// .includes(): controlla se un elemento è presente dentro un array
// ci ritorna un booleano

// let bool = prices.includes(84);

// console.log(bool);

// .find(): ci ritorna il primo elemento dell'array che soddisfa una condizione
let lowPrice = prices.find((price) => price < 17);
// console.log(lowPrice);

// .some(), .every() ci tornano un booleano sulla base di una condizione espressa
let boolT = prices.some((price) => price < 17);
let boolF = prices.every((price) => price < 17);

// .findIndex(): ci trova il primo indice appartenente ad un elemento sulla base di una condizione
let index = prices.findIndex((p) => p < 20);
console.log(index);
