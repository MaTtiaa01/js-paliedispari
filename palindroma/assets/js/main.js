// Chiedere all’utente di inserire una parola 
// mi creo una costante con all'interno un prompt

const userWord = prompt("Insert a word")
console.log(userWord);


//Creare una funzione per capire se la parola inserita è palindroma
//prendo la parola e uso .reverseString
//comparo la parola del prompt con quella nel .reverseString
//se sono uguali sono plaindrome altrimenti no
function reverseWords(str) {
    let reverseWordArr = str.split(" ").reverse().join("");
    console.log(reverseWordArr);
    return reverseWordArr;

}



function palindromeCheck(wordToCheck) {
    let reversedWord = reverseWords(userWord);
    console.log(reversedWord);

    if (wordToCheck === reversedWord) {
        //console.log("la parola è palindroma");
        return true
    }
    return false
}

const boolean = palindromeCheck(userWord);
console.log(boolean);

if (palindromeCheck()) {
    console.log("la parola è palindroma");
}else{
    console.log("la parola non è palindroma");
}

   

