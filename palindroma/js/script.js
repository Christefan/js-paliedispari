const parolaUtente = prompt ('Inserisci una parola');

const parolaGirata = rovesciaParola(parolaUtente);
console.log(parolaGirata);

controlloP(parolaUtente,parolaGirata);

function rovesciaParola(parolaF){
    let parolaGirata = '';

    for ( i = parolaF.length-1; i >=0; i--){
        parolaGirata += parolaF [i];
    }
    return parolaGirata;
}

function controlloP(parolaU,parolaG){
    if (parolaGirata === parolaUtente){
        alert ('La parola è palindroma');
    }
    else{
        alert ('La parola non è palindroma');
    }
}