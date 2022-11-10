// PROBLEMA

// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GIOCO A TURNI
// STABILIRE DUE VARIABILI (UNA PER L'UTENTE UNA PER IL GIOCATORE)
// TRAMITE UN CICLO E IF SI STABILISCE IL VINCITORE
// PUNTI SI ACCUMULANO TRAMITE UN CONTATORE
// CICLO AVRA' UNA DURATA DI 10 PARTITE



let utente;
let pc;
let partite = 10;



function play() {
    let cUtente = 0;
    let cComputer = 0;

    for (let i=0; i<partite; i++){
        utente = Math.floor(Math.random() * 6) + 1;
        pc = Math.floor(Math.random() * 6) + 1;
        if (utente < pc){
            cComputer++;
        }else if (utente > pc){
            cUtente++;
        }else{
            cComputer++;
            cUtente++;
        }
        utente = 0;
        pc = 0;
    }

    if (cComputer > cUtente){
        alert("ha vinto il pc con " + cComputer + " punti");
    
    }else if(cComputer < cUtente){
        alert("ha vinto l'utente con " + cUtente + " punti");
    } else {
        alert("avete concluso in pareggio");
    }


}