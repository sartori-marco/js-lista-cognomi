// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova


// ARRAY CON DEI COGNOMI

var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// CHIEDO ALL'UTENTE IL COGNOME
var cognomeUtente = prompt('Inserisci il tuo cognome');


// // // IL COGNOME DEVE AVERE LA PRIMA LETTERA MAIUSCOLA
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.substr(1).toLowerCase();

// LO INSERISCO NELL'ARRAY

cognomi.push(cognomeUtente);

// STAMPO SU HTML I COGNOMI

document.getElementById('cognomi-lista').innerHTML += cognomi;


// METTO I COGNOMI IN ORDINE ALFABETICO

document.getElementById('ordine-alfabetico').innerHTML += cognomi.sort();

// INDICO LA POSIZIONE "UMANA" DEL COGNOME INSERITO DALL'UTENTE
for (var i = 0; i < cognomi.length; i++) {
  if (cognomeUtente == cognomi[i]) {
    document.getElementById('cognome-utente').innerHTML += ++i;
  }

}





//
