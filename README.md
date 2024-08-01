esercizio: Biglietto Treno con form
cartella/repo: js-biglietto-treno-form
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Bonus:
Gestire il campo dei chilometri con un input di tipo number
Gestire il campo dell'età con una <select>
Aggiungere un bottone per resettare il form
Aggiungere un campo col nome del passeggero
Randomizzare, nel biglietto, un numero di carrozza casuale
Randomizzare nel biglietto, un Codice Passeggero di 5 cifre che deve iniziare con il numero 9
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
:avviso: ATTENZIONE:
Se utilizzate il tag <form> ,Javascript tenterà di ricaricare la pagina, cancellando tutte le vostre variabili in memoria.
Per evitare che ciò accada,  potete utilizzare un  <button type="button"> o, se vi sentite veri pro, sfruttare il preventDefault dell'evento, come visto in classe!
Buon lavoro e buon appetito.
PS eventuali ritardi nelle consegne non saranno giustificati dai ritardi di trenitalia (modificato) 