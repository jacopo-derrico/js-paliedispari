/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
let parolaUtente = document.getElementById('parola')
let bottonePalindromo = document.getElementById('palindromo')
let risultatoPalindromo = document.getElementById('result-palindrome')
let parolaArray = []
let parolaInversa = []

function invertWord(parola) {
    parolaArray = Array.from(parola)
    
    for (let i = parolaArray.length - 1; i >= 0; i--) {
        parolaInversa.push(parolaArray[i])
    }
    console.log(parolaArray)
    console.log(parolaInversa)
    return parolaArray, parolaInversa
}

function isPalindrome(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

bottonePalindromo.addEventListener('click', function() {
    parolaArray = []
    parolaInversa = []
    invertWord(parolaUtente.value);

    if (isPalindrome(parolaArray, parolaInversa) === true) {
        risultatoPalindromo.innerHTML = `La parola ${parolaUtente.value} è palindroma`
    } else if (isPalindrome(parolaArray, parolaInversa) === false) {
        risultatoPalindromo.innerHTML = `La parola ${parolaUtente.value} non è palindroma`
    } 
 })