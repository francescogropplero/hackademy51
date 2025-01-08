// Keydown: EVENTO CLICK TASTO
// Keyup

// let textarea = document.querySelector(".text")

// textarea.addEventListener('keydown', (event) => {
//     if (event.key == "Enter") {
//         event.preventDefault();
//     }
// })

// let input = document.querySelector(".input");

// let email = input.value;

// Asincronia
// console.log("Inizio percorso");

// setTimeout ci permette di eseguire operazioni
// dopo un determinato ritardo di tempo (espresso in millisecondi)
// setTimeout(() => {
//     console.log("Sono nel set TImeout");
// }, 10000)

// console.log("Fine percorso");

// Fetch: prendere
// E' il nostro metodo per effettuare chiamate HTTP

// Operazioni
// GET -> OTTENERE DATI
// POST -> MANDARE DATI
// PUT -> MODIFICARE DATI GIA ESISTENTI
// DELETE -> ELIMINARE DATI

// Come parametro prende (stringa) l'URL a cui fare la richiesta
// .then(resp => resp.json()) andiamo a scrivere la risposta in json
// dopo possiamo manipolarla
// Di default fa una GET
// let array = [];


// fetch("https://jsonplaceholder.typicode.com/posts", {

// })
// .then(resp => resp.json())
// .then(data => {
//     data.forEach(element => {
//         array.push(element);
//     });
// });

// let lista = document.querySelector("#lista");
// array.forEach(el => {
//     lista.appendChild()
// })

// Promise
// Strumento che ci permette di effettuare operazioni HTTP 
// Gestendo entrambe le eventualità 
// Sintassi ad oggetto, utilizziamo la parola chiave new

// Arrow fucntion, che prende come parametri:
// resolve (esito positivo)
// reject (esito negativo)
// let promise = new Promise((resolve, reject) => {
//     const bool = true;

//     if (bool) {
//         resolve("Success");
//     }
//     else {
//         reject("Failure");
//     }
// })
// .then((result) => {
//     console.log(result);
    
//     // Se ha esito positivo, esegui questo codice
// })
// .catch((e) => {
//     // Esito negativo, gestisci l'errore
// })


function getData() {
    return new Promise((resolve, reject) => {
        // Chiamo il server per ottenere i dati
        fetch("http://127.0.0.1:5500/example.json")
        // gestisco risposta
        .then(response => {
            console.log(response);
            
            if (!response.ok) {
                throw new Error("Errore nella chiamata");
            }

            // La passo al then esterno
            return response.json();
        })
        // Gestisco dati ottenuti
        .then((data) => {
            resolve(data);
        })
        // Gestisco eccezione se non ho i dati
        .catch((e) => {
            reject(e);
        })
    })
}

async function fetchData() {
    try {
        let response = await fetch("http://127.0.0.1:5500/example.json", {});
        let data = await response.json();
        console.log(data);
    }
    catch(e) {
        console.error(e)
    }
}

fetchData();


// getData()
// .then((data) => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(`Errore: ${error}`);
// })
