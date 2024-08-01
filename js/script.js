// Calcolatore di prezzo biglietto in base ai dati raccolti dell'utente.

/*
1. Recuperare gli elementi d'interesse all'interno del DOM.
Inserire le percentuali di sconto

2. Creazione messaggio


1. Chiedere all'utente il numero di chilometri che vuole percorre.
2. Chiedere l'età all'utente.
3. Calcolare il prezzo del viaggio.
4a. calcolare lo sconto in base all'età dell'utente.
4a.  un 20% per i minorenni.
ab.  un 40% per gli over 60.

Inserire i dati raccolti all'interno del DOM.
   . Verificare inserito correttamente in console e nel DOM.
*/


/* Fase di Preparazione */

//1. Recuperare gli elementi d'interesse all'interno del DOM.
const namefield = document.getElementById('Name');
const kmsfield = document.getElementById("Kms");
const agefield = document.getElementById('Age');
const button = document.getElementById('Create');
const total = document.getElementById('price')

//2. Creazione messaggio
let pricemessage = 'Il tuo biglietto costa € '
let finalprice
// Tariffa al Km 
const fare = (0.21)

/* Fase Gestione eventi */
button.addEventListener('click', function (e) {

    e.preventDefault();

    const name = namefield.value.trim();
    const kms = kmsfield.value;
    const age = agefield.value;
    console.log(kms, typeof age)

    /* fase dei elaborazione dati */

    let baseprice = (kms * fare)

    finalprice = baseprice


    if (age == 'senior') {
        finalprice *= 0.6;

    } else if (age == 'minorenne') {
        finalprice *= 0.8
    }
    else {
        finalprice = baseprice
    }
    console.log(pricemessage + finalprice.toFixed(2))
    if (finalprice > 0) { total.innerHTML = pricemessage + finalprice.toFixed(2) }
})
/*  fase di output */
