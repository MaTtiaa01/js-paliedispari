// // Chiedere all’utente di inserire una parola 
// // mi creo una costante con all'interno un prompt

// const userWord = prompt("Insert a word")
// console.log(userWord);


// //Creare una funzione per capire se la parola inserita è palindroma
// //prendo la parola e uso .reverseString
// //comparo la parola del prompt con quella nel .reverseString
// //se sono uguali sono plaindrome altrimenti no

// function reverseWords(str) {
//    let reversed = '';
//    for (let i = str.lenght - 1 ; i >= 0; i--) {
//     reversed += str[i];
//     //console.log(reversed);
//    }
//    return reversed
//     //return str.split("").reverse().join("");

// }

// const reversedWord = reverseWords(userWord);
// console.log(reversedWord);



// function palindromeCheck(wordToCheck) {
//     if (wordToCheck === reversedWord) {
//         //console.log("la parola è palindroma");
//         return true;
//     }
    
//     return false;
    
// }

// const boolean = palindromeCheck(userWord);
// console.log(boolean);

// if (boolean) {
//     console.log("la parola è palindroma");
// }else{
//     console.log("la parola non è palindroma");
// }

   

//####### SECONDA SOLUZIONE ########

//Palidroma
//Chiedere all’utente di inserire una parola 
    //chiedo all'utente con un prompt e la inserisco in una costante

/**Creare una funzione per capire se la parola inserita è palindroma
    -creao un array in cui vado a inserire i carattteri della parola
    -per prendere i singoli caratteri devo fare un ciclo for all'interno della parola (split)
    -prendo i singoli caratteri e li giro al contrario leggendoli dall'ultimo al prima con un ciclo for (reverse)
    -trasformo i caratteri in una stringa(join)
    -confronto la mia stringa con quella dell'utente
    -se sono uguali è palindroma
    -altrimenti no
*/

const userWord = prompt("inserire una parola");
console.log(userWord);

const charArray = []

for (let i = 0; i < userWord.length; i++) {
    const char = userWord[i];
    //console.log(char);
    charArray.push(char);
}

console.log(charArray);
let reversedWord = "";

for (let i = charArray.length - 1; i >= 0; i--) {
    const reversedChar = charArray[i];
    //console.log(reversedChar);
    reversedWord += reversedChar
    console.log(reversedWord);
}

if (userWord === reversedWord) {
    console.log("è una parola palindroma");
}else{
    console.log("non è una parola palindroma");
}
