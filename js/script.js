// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova


// ARRAY CON DEI COGNOMI

var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// CHIEDO ALL'UTENTE IL COGNOME E LO INSERISCO NELL'ARRAY
var cognomeUtente = prompt('Inserisci il tuo cognome');

cognomi.push(cognomeUtente);

// STAMPO SU HTML I COGNOMI

document.getElementById('cognomi-lista').innerHTML += cognomi;
