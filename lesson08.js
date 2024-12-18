// Oggetti
// Dati strutturali: array e oggetti

// Dati primitivi : number, string, boolean

// Sequenza NON ordinata di elementi

// Proprietà degli oggetti: chiave-valore
// let name = "Jader";

// let prodotto = {
//   name: "Computer",
//   price: 899,

//   // metodi
//   showInfo: function () {
//     console.log(`This is a ${this.name}, worth ${this.price}`);
//   },
// };

// Accedere / Modificare le proprietà degli oggetti

// Dot Syntax
// instagramAccount.username = "Giancarlo";
// console.log(instagramAccount.username);

// // Annotazione a parentesi
// instagramAccount["username"] = "Genoveffo";

// prodotto.showInfo();

// let instagramAccount = {
//   username: "Francesco",
//   followers: ["Jader", "Simone"],
//   seguiti: ["Matteo"],

//   addFollower: function (name) {
//     this.followers.push(name);
//   },
// };

// let instagramAccount = {
//   username: "Francesco",
//   followers: ["Jader", "Simone"],
//   seguiti: ["Matteo"],

//   addFollower: function (name) {
//     this.followers.push(name);
//   },
// };

// // Aggiungere proprietà agli oggetti
// // Spread Operator "..."

// let numbers = [1, 2, 3, 4];

// // console.log(numbers);
// // console.log(...numbers);

// // Clonare un oggetto
// let newAccount = { ...instagramAccount };

// let account = {
//   username: "Nico",
//   followers: ["Jader", "Simone"],
//   seguiti: ["Matteo"],

//   addFollower: function (name) {
//     this.followers.push(name);
//   },
// };

// // Aggiungere delle proprietà

// let accounts = [instagramAccount, newAccount, account];

// let newArray = accounts.map((account) => {
//   account = {
//     ...account,
//     numberOfPosts: 15,
//   };

//   return account;
// });

// console.log(newArray);

// console.log();

// let followers = ["Adriana", "Mirko"];

// let account = {
//   username: "Nico",
//   followers: ["Jader", "Simone"],
//   seguiti: ["Matteo"],

//   addFollower: function (name) {
//     this.followers.push(name);
//   },
// };

// account.addFollower("Carla");

// console.log(account.followers);
// console.log(followers);

//////////////////// Classe
class Account {
  constructor(username) {
    this.username = username;
  }
}

let accountX = new Account("francesco.gropplero");
// console.log(accountX.username);

// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   statura() {
//     console.log(`L'animale ${this.nome} è di statura media`);
//   }

//   verso() {
//     console.log(`L'animale ${this.nome} fa un verso.`);
//   }
// }

// // Ereditarietà delle classi
// class Cane extends Animal {
//   talking() {
//     console.log(`${this.nome} abbaia`);
//   }
// }

// let animale = new Animal("Leone");

// let cane = new Dog("Otto");

// animale.verso();
// cane.statura();

// let prodottiInVendita = [];

// function addProduct(nome, prezzo, quantita) {
//   let prodotto = new Product(nome, prezzo, quantita);
//   prodottiInVendita.push(prodotto);
// }

// addProduct("PC", 1599, 5);

// Data e ora attuali
// let data = new Date();
// console.log(data);

// Data specifica, con stringa
let data = new Date("2024-12-17");
// console.log(data);

// Data specifica, con parametri diversi
let newData = new Date(2024, 11, 19);

// Operazione con le date
let secondData = new Date("2024-12-19");

let example = new Date();

console.log(example);
console.log(example.toUTCString());

// Metodi utilizzati maggiormente
// .toUTCString()
// .getDate()
// .getYear()
// .toLocaleDateString()

// Metodo per stampare date "all'italiana"
console.log(example.toLocaleDateString("it-IT"));

// Passaggio di valori, differenza tra primitivi e strutturali
// Passaggio per valore
let a = 10;
let b = a;

b = 15;

console.log(a);
console.log(b);

// Passaggio per riferimento
let obj1 = {
  name: "Alice",
};

let obj2 = { ...obj1 };

obj2.name = "Ludovico";

console.log(obj1);
console.log(obj2);

// Introduzione alla gestione degli errori
// try....catch

try {
  // CODICE DA ESEGUIRE
  let soldi = 0;
  let totProdotti = 100;

  if (soldi < totProdotti) {
    throw new Error("Attenzione, soldi non pervenuti");
  }
} catch (error) {
  console.log(error);
}

// try {
// } catch (ex) {}
