// Recap generale

// camelCase
// addToCart

// PascalCase
// AddToCart()

// kebab-case
// add_to_cart

////////////////////////// Array
// Un array è una struttura dati che contiene dei valori in sequenza (ordinata)
const arrayVuoto = [];
const arrayValorizzato = [0, 1, 2, 3, 4];

let prodotto = arrayValorizzato[0];

// Gli array hanno un INDICE (che parte da 0)
// Da non confondere con array.length LENGTH che parte da 1 (lunghezza dell'array)
// console.log(prodotto);

//////////// Accedere agli elementi di un array
// arrayValorizzato[indice]
// let prodotto = arrayValorizzato[0];

/////////////////////// Cicli
// Sono operazioni che ci permettono di ripetere del codice
// Servono ad evitare ripetizioni manuali di codice

// 3 diversi tipi di cicli: while, do while, for

///////// Ciclo for
// for (inizializzazione, condizione, incremento/decremento)
for (let index = 0; index < 10; index++) {
  // Corpo del for
}

// const NUMBERS = [25, 57, 88];

// for (let i = 0; i < NUMBERS.length; i++) {
//   console.log(NUMBERS[i]);
// }

// for (let index = 1; index < prodotti.length; index++) {
//   // OPERAZIONE
//   console.log(prodotti[index]);
// }

///////// Ciclo while: esegue operazione finchè la condizione non è falsa
// while(condizione) {
// Corpo del while, codice da eseguire
// }

// let n = 10;

// while (n < 10) {
//   n++;
//   console.log(n, "SONO NEL WHILE");
// }

///////// Ciclo do-while: esegue operazione finchè la condizione non è falsa,
// però GARANTISCE l'esecuzione del codice almeno una volta

// do {
//   console.log(n, "SONO NEL DO WHILE");
//   n++;
// } while (n < 10);

// break: serve per uscire dal ciclo
// continue: ci serve per saltare l'esecuzione corrente

// for (let index = 0; index < 5; index++) {
//   if (index === 3) continue;
//   console.log(index);
// }

/////////////////////// Funzioni
// Ci servono per evitare le ripetizioni, gestire eventi ecc.

// Sintassi di base
function nomeFunzione(parametri) {
  // Corpo della funzione
  // return X;
}

// PARAMETRI
// Sono l'input della nostra funzione

// Quando dichiariamo una funzione, generico
// Quando chiamiamo la funzione, specifico

let prodotti = ["Scarpe", "Scarpe", "Cuffie", "Computer", "Telecamera"];

// function filtraBarraRicerca(inputUtente) {
//   return prodotti.filter((prodotto) => prodotto == inputUtente);

// //   let prodottiFiltrati = prodotti.filter((prodotto) => prodotto == inputUtente);
// //   return prodottiFiltrati;
// }

// let risultato = filtraBarraRicerca("Scarpee");
// console.log(risultato);

// function sommaDueNumeri(num1, num2) {
//   //   let somma = num1 + num2;

//   //   console.log(somma, "SOMMA DENTRO LA FUNZIONE");
//   return num1 + num2;
// }

// let operazione = sommaDueNumeri(2, 4);
// console.log(operazione);

///////////////// Parametri di default
// function saluta(nome = "ospite") {
//   console.log(`Buonasera ${nome}`);
// }

// let nomi = ["Adriana", "Jader", "Marco", "Mia"];
// nomi.push("Luigi");

// log di nomi, esce ["Adriana", "Jader", "Marco", "Mia", "Luigi"]

// saluta(nome);
// saluta("Adriana");

// let cart = [];

// function addToCart(productName, price) {
//   cart.push({ productName, price });
// }

// function getTotalPrice() {
//   let total = 0;

//   for (let index = 0; index < cart.length; index++) {
//     // Stiamo scrivendo la stessa

//     // Dot Syntax
//     total += cart[index].price;
//     // total = total + cart[i].prezzo;
//   }

//   return total;
// }

// // Simulo click utente, CHIAMO la funzione
// addToCart("Telefono", 800);
// addToCart("Scarpe", 20);

// // Simulo pagina del carrello
// console.log(`Costo totale dei prodotti: ${getTotalPrice()}`);

// App per determinare se una persona può entrare o meno in una discoteca
// function checkAge(name, age) {
//   let minimumAge = 18;

//   if (age < minimumAge) {
//     console.log(
//       `L'utente ${name} non può entrare in quanto ha solo ${age} anni`
//     );
//     return false;
//   } else {
//     console.log(`${name} può entrare all'evento`);
//     return true;
//   }
// }

// let buttonClickable = checkAge("Jader", 17);

// let somma = () => {
//   5;
// };

// console.log(somma());

function sommaNumeriPari(max) {
  let somma = 0;

  for (let i = 0; i < max; i++) {
    if (i % 2 == 0) {
      somma += i;
    }
  }

  console.log(somma);
}

sommaNumeriPari(25);
