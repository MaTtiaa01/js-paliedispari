// L’utente sceglie pari o dispari 
const userChoise = prompt("pari o dispari?");
console.log(userChoise);
//inserisce un numero da 1 a 5.
const userNumber = Number( prompt("inserire un numero da 1 a 5"));
console.log(userNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const randomNumber = numberGenerator(1,5);
console.log(randomNumber);


//Sommiamo i due numeri 

const sum = userNumber + randomNumber;
console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
function pariDispari(somma) {
    if (somma % 2 == 0) {
        return "pari"
    }
    return "dispari"
}

const pari_dispari = pariDispari(sum);
console.log(pari_dispari);


//Dichiariamo chi ha vinto.

if (pari_dispari === userChoise) {
    console.log("Complimenti hai vinto");
}else{
    console.log("Mi dispiace ha vinto il pc");
}