// PROBLEMA

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// CREO UN ARRAY DI PROVA CON VARIE EMAIL

// TRAMITE UN CICLO E IF CONTROLLO SE L'EMAIL è PRESENTE NELLA LISTA

// SE è PRESENTE CONCLUDO I CICLO E RILASCIO UN OUTPUT ALL'UTENTE

// SE NON DOVESSE ESSERE PRESENTE RESTITUISCO UN MESSAGGIO DI ERRORE

let email;
let listMail = ["pinco@gmail.com", "panco@gmail.com", "pallino@gmail.com"];
let check;




function checkEmail(){
    email = document.getElementById('email').value;
    console.log(email);
    for(let i=0; i<listMail.length; i++){
        if (email == listMail[i]){
            alert("email presente");
            i = listMail.length;
            check = true;
        }else{
            check = false;         
        }
    }
    if (check == false){
        alert ("email non presente");
    }
}