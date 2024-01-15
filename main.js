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

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let numeroUtente = document.getElementById('numero')
let even = document.getElementById('pari')
let odd = document.getElementById('dispari')

let bottoneNumeri = document.getElementById('pari-dispari')
let risultatoNumeri = document.getElementById('result-number')

function randomNumber(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

function isEven(number) {
    if ((number % 2) === 0) {
        return true
    }
    return false
}

bottoneNumeri.addEventListener('click', function() {
    let somma = parseInt(numeroUtente.value) + randomNumber(1, 5)

    isEven(somma)
    console.log(isEven)
    if (isEven === true && even.checked ) {
        risultatoNumeri.innerHTML = `Il tuo numero è: ${numeroUtente.value}. Il numero del computer è: ${somma - parseInt(numeroUtente.value)}. Hai vinto! La somma dei numeri è: ${somma}`
    } else if (isEven === false && odd.checked ) {
        risultatoNumeri.innerHTML = `Il tuo numero è: ${numeroUtente.value}. Il numero del computer è: ${somma - parseInt(numeroUtente.value)}. Hai vinto! La somma dei numeri è: ${somma}`
    } else {
        risultatoNumeri.innerHTML = `Il tuo numero è: ${numeroUtente.value}. Il numero del computer è: ${somma - parseInt(numeroUtente.value)}. Hai perso :( La somma dei numeri è: ${somma}`
    }
})