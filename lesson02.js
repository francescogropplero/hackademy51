// Tipi di dato

// Operatori

// 2 tipologie di tipi di dato
// Primitivi: leggeri e immutabili (number, string, boolean, undefined, null, NaN)
// Strutturali: pesanti e mutabili (object, array)

// Dato primitivo
// Dichiarare una variabile
// let a = 5;

// Riassegnazione
// a = 10;

// Dato strutturale
// let user = {
// username può essere un esempio di dato primitivo
//     username,
//     dateOfBirth,
// }

// Numero
let a = 5;

let b = 10;

// Operazioni aritmetiche di base
// Addizione
// console.log(a + b);

// // Sottrazione
// console.log(a - b);

// // Moltiplicazione
// console.log(a * b);

// // Divisione
// console.log(a / b);

// // Operazioni avanzate

// // Potenza
// console.log(a ** b);

// Operatore modulo: % ci restituisce il RESTO di una divisione
// Utilizzi: Se un numero è pari o dispari
// Se un numvero è divisibile per un altro
// console.log(b % 2);

// Stringhe
// Contenitori di caratteri
// '', "", ``
let stringa = "5";

// let singoliApici = 'stringa con singoli apici'
// let doppiApici = "stringa con i doppi apici"
// let backTick = `stringa con i backtick`

// I backtick sono importanti per la string interpolation (Tengo premuto Alt e 96)
// ${}
let example = `Il valore di a è ${a}`;

// Concatenazione di stringhe: +
let example2 = "Il valore di a è" + " " + a;

// console.log(example2);

// Type cohercion
let c = 5;
let d = "5";
let e = "Ciao a tutti";

// console.log(c + d);

// Type cohercion
// console.log(e / c);

// Boolean: true e false
// 0 1

// if (eta > 18) {
//   // Entri a ballare ecc ecc
// } else {
//   // Vai a casa e guardi la tv
// }

// if (false) {
//   console.log("false");
//   console.log(false);
// }

// Valori Truthy: dato valorizzato (stringa piena, numero > 0, [])
// Valore Falsy: dato NON valorizzato (stringa vuota, 0, null, undefined)
// let number = 0;
// let secondNumber = 1;

// if (secondNumber) {
//   // Se userName è valorizzato, allora la condizione si verifica
//   console.log("Sono entrato nell'if");
// }

// Undefined
// L'undefined rappresenta l'assenza di un valore
// let f;
// console.log(f);

// Null
// Rappresenta l'assenza di valore, però VOLONTARIA
// let g = null;
// console.log(g);

/////////// OPERATORI in Js
// Operatori "unari"
// typeof, variabile++

// typeof: serve a capire il tipo di un dato
let h = "1dgfsgksg";
// console.log(typeof h);

// variabile++: serve per fare +1 o -1
// h--;
// console.log(h);

// Operatori binari
// ==, ===, !=, !==, >, <, >=, <=
let j = 2;
let k = 2;

// Uguaglianza semplice: ==
if (j == k) {
  console.log("Ciao \nvero");
} else {
  console.log("falso");
}

// "Strettamente uguale": === controlla anche il tipo oltre il valore
if (j === k) {
  console.log("vero");
} else {
  console.log("falso");
}

// Diverso: !=
if (j != k) {
  console.log("vero");
} else {
  console.log("falso");
}

// Strettamente Diverso: !==  controlla anche il tipo oltre il valore
if (j !== k) {
  console.log("vero");
} else {
  console.log("falso");
}

// if (j <= k) {
//   console.log("vero");
// } else {
//   console.log("falso");
// }

// Operatori logici
// AND e OR
// AND: &&

// OR: ||
// let vero = true;
// let falso = false;

// console.log(vero || falso);

// NOT: !
let userName = "";

// FUNZIONE XXX
if (!userName) {
  console.log("Sono nel if");
}

// Math
// Oggeto per fare operazioni matematiche
// .max, .min
let m = 0;
let n = 1;
let l = 2;

// Dot Syntax: andare a prendere ciò che c'è all'interno

// .max() ci va a prendere il valore massimo di una serie di numeri
let max = Math.max(m, n, l);

console.log(max);

// .min() ci va a prendere il valore massimo di una serie di numeri
let min = Math.min(m, n, l);

console.log(min);
