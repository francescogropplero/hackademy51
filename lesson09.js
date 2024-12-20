// JSON
// Acronimo: JavaScript Object Notation

// Formato: ci serve per affrontare la comunicazione client-server
// let instagramUser = {
//   username: "Francesco",
//   age: 24,
// };

// console.log(instagramUser);

// // Trasformare un oggetto in JSON
// let jsonUser = JSON.stringify(instagramUser);
// console.log(jsonUser);

// // Trasfomare un JSON in oggetto JS
// console.log(JSON.parse(jsonUser));

//////////////////////// Introduzione al DOM
// DOM: acronimo, Document Object Model
// rappresentazione ad albero degli elementi HTML
// Il DOM è composto da nodi

// Accedo al DOM mediante la variabile "document"
// document.


// getElementById
// Ci ritorna il nodo HTML mediante l'id (stringato)
// let nome = prompt("Come ti chiami?");

// let p = document.getElementById("generico");
// // console.log(p.textContent);

// // let instagramUser = {
// //     username: "Francesco",
// //     age: 24,
// //   };
// // textContent: proprietà per vedere il contenuto testuale dei nodi HTML
// p.textContent += nome;

// .querySelector
// Utilizza i selettori CSS
// Mi ritorna il PRIMO nodo HTML che corrisponde al selettore
// let firstP = document.querySelector("p");
// console.log(firstP);


// .querySelectorAll
// Utilizza i selettori CSS
// La differenza è che mi ritorna TUTTI i nodi HTML che corrispondono al selettore
// let p = document.querySelectorAll("p");
// console.log(p);

// Modi per modificare i nodi
// textContent, innerHtml
// innerHTMl va a creare un figlio dentro il nostro elemento
// p.innerHTML = "<h1>Io sono un h1</h1>"


// // Modifica degli attributi
// p.setAttribute("class", "bg-red")

// // Lettura degli attributi
// console.log(p.getAttribute("class"));

// // Rimozione attributi
// // p.removeAttribute("class");

// // Accesso allo stile di un nodo
// // Dentro l'oggetto style utilizziamo le proprietà con il camelCase
// // Diamo una stringa alle proprietà CSS dentro style
// p.style.background = "pink";
// p.style.fontSize = "70px";


/// Creazione e Rimozione di nodi dal DOM
// Creazione: document.createElement
// Prende come parametro il tag HTML che vogliamo creare (stringato)
// let var1 = document.createElement("h1");
// element.textContent = "Lezione sul DOM";

// let div = document.querySelector("div");

// Metodo appendChild: ci serve per "appendere" dei nodi a degli altri nodi HTMl
// div.appendChild(element);
// div.removeChild(element);



/////////////////// .addEventListener()
// Metodo che ci permette di gestire tutti gli eventi 
let button = document.querySelector("button");
let img = document.querySelector("img");

button.addEventListener("click", () => {
   img.setAttribute("src", `https://picsum.photos/${Math.round(Math.random() * 1000)}`)
})

