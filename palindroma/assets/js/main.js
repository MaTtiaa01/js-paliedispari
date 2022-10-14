// Chiedere all’utente di inserire una parola 
// mi creo una costante con all'interno un prompt

const userWord = prompt("Insert a word")
console.log(userWord);


//Creare una funzione per capire se la parola inserita è palindroma
//prendo la parola e uso .reverseString
//comparo la parola del prompt con quella nel .reverseString
//se sono uguali sono plaindrome altrimenti no

function reverseWords(str) {
    let reverseWordArr = str.split(" ");
    reverseWordArr.reverse();
    reverseWordArr = reverseWordArr.join(" ");
    console.log(reverseWordArr);
    return reverseWordArr;

}
const reversedWord = reverseWords(userWord);
console.log(reversedWord);

function palindromeCheck(wordToCheck) {
    
    

    if (wordToCheck === reversedWord) {
        //console.log("la parola è palindroma");
        return true
    }
    return false
}

const boolean = palindromeCheck(userWord);
console.log(boolean);

if (boolean) {
    console.log("la parola è palindroma");
}else{
    console.log("la parola non è palindroma");
}

   

