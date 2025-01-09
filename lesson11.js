// // DOM

// // Selettori
// // getElementById
// // Metodo dell'oggetto document
// // let p = document.getElementById("testo");
// // console.log(p);

// // // Modifica del testo
// // // la proprietà innerText
// // p.innerText = "Ciao Hackademy"

// // querySelector()
// // Va a prendere il PRIMO elemento che combacia col selettore
// // Prende come parametro i SELETTORI CSS
// // form, .classi, #id

// // let p = document.querySelector(".testo");
// // // console.log(p);

// // // querySelectorAll() 
// // // Prende tutti gli elementi che combaciano con il selettore

// // let elements = document.querySelectorAll("*")
// // // console.log(elements);

// // // .getElementByClassName
// // let _p = document.getElementsByClassName("testo")
// // console.log(_p);

// // let p = document.querySelector("p");

// // function modifyP() {
// //     p.innerText = "Ciao";

// //     // Modifica dello stile dei nodi
// //     p.style.background = "red";
// // }


// // Creazione (e rimozione) degli elementi
// // Con il metodo createElement andiamo a creare i nodi
// // Passandogli come stringa ciò che vogliamo creare es. createElement("p");
// let ul = document.querySelector("ul");

// const addElement = () => {
//     let li = document.createElement("li");

//     li.innerText = "Elemento 2";

//     ul.appendChild(li);
// }

// // // Eliminiamo elementi con removeChild
// // // prende come parametro una variabile con il nodo HTML PRECISO
// // // 
// const removeElement = () => {
//     ul.removeChild(ul.lastElementChild)
    
// }


// // eventListener
//  window.addEventListener("load", () => {
//     setTimeout(() => {
//         let body = document.querySelector("body");

//         body.style.background = "pink";
//     }, 5000)
// })

// // let addButton = document.querySelector(".add");
// // let removeButton = document.querySelector(".remove");


// // // addButton.addEventListener("onclick", addElement());
// // addButton.addEventListener("click", () => addElement());

// // removeButton.addEventListener("click", () => removeElement());
// let p = document.getElementById("output");

// const saluta = () => {
//     let nome = document.querySelector("input").value;
    
//     p.innerText = `Ciao ${nome}`;
    
//     document.querySelector("input").value = "";
// }


///////////////////// Promise
// Sono un oggetto
// Ci servono per fare operazioni asincrone (che prendono tempo)
// Vanno costruite col costrutto new

// const fetchUsers = (wantsToFetch) => {
//     // Scrittura base delle promise dentro alle funzioni
//     // Prende di default 2 parametri: resolve, reject 
//     return new Promise((resolve, reject) => {
//         if (wantsToFetch) {
//             resolve("Dati caricati!")
//         }
//         else {
//             reject("Errore nel caricare i dati");
//         }
//     })
//     // // Per finire qua dentro devo fare il resolve della promise
//     // .then(() => {
//     //     console.log("Ciao");
//     // })
//     // // Qua il reject
//     // .catch(() => {

//     // })
// }

// fetchUsers(false)
// // Il then prende come parametro ciò che esce mediante il resolve
// .then((data) => {
//     console.log(data);
// })
// // Il catch prende come parametro l'errore che esce mediante il reject
// .catch((error) => {
//     console.error(error);
// } )

// console.log("Caricamento in corso....");

// const loadData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Dati caricati!");
//         }, 3000)
//     })
// }

// loadData()
// .then((result) =>{
//     console.log(result);
    
// })


// const url = "https://jsonplaceholder.typicode.com/users";

// const loadData = () => {
//     let ul = document.createElement("ul");
//     document.body.appendChild(ul);

//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then(async (resp) => {
//             console.log(resp);

//             let users = await resp.json();
            
//             users.forEach(user => {
//                 let li = document.createElement("li");

//                 li.innerText = user.name;

//                 ul.appendChild(li);
//             });
//         })
//     })
// }

// loadData();

//////////////// ASYNC AWAIT
// async accompagna le funzioni
// async function

async function loadData() {
    try {
        let request = await fetch("https://invalid.url");
        console.log(request);
    }
    catch(e) {
        console.log("ERRORE");
    }
}

loadData();