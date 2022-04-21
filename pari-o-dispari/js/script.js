const userNumer = parseInt(prompt('Inserisci un numero tra 1 a 5'));
console.log(userNumer);
const computerNumber = randomNumber() ;
console.log(computerNumber);

console.log('La somma :',userNumer + computerNumber);
evenorodd(userNumer + computerNumber);


function randomNumber(){
    return Math.floor(Math.random() * 5) + 1 ;
}

function evenorodd(sumNumber){
    if(sumNumber%2 === 0){
        alert('La somma e` pari');
        alert('Il vincitore e`:  Utente');
    }else{
        alert('La somma e` dispari');
        alert('Il vincitore e`:  Computer');
    }
}
