// Chiedere all’utente di inserire una parola 
// mi creo una costante con all'interno un prompt

const userWord = prompt("Insert a word")
console.log(userWord);


//Creare una funzione per capire se la parola inserita è palindroma
//prendo la parola e uso .reverseString
//comparo la parola del prompt con quella nel .reverseString
//se sono uguali sono plaindrome altrimenti no
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

const reversedWord = reverseWords(userWord);
console.log(reversedWord);

function plaindromeCheck() {
    
   
}

