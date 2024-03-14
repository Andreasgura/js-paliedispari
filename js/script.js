/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let typedWord = prompt('inserisci una parola')

function palindrom(typedWord) {
    let letter
    let reverseWord ='';
    let flag = false;
    for (let index = typedWord.length-1; index >= 0; index--) {
    letter = typedWord[index];
    reverseWord += letter;
    }
    if (reverseWord === typedWord) {
    flag = true
    }
    return flag
}
richiesta = palindrom(typedWord)

console.log("provadi " + richiesta)

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/


let evenOrOdd = prompt('pari o dispari?');

let userNumber = getRndInteger(1,5);
console.log('usernumber' + userNumber)

let pcNumber = getRndInteger(1,5);
console.log('pc number' + pcNumber);

function evenOdd(num1,num2) {
    let flag = ''
    let sum = num1 + num2
    if (sum % 2 === 0) {
        flag = 'even'
    } else {
        flag = 'odd'
    }
    return flag
}

let result = evenOdd(userNumber, pcNumber)

console.log(result)

if (result === oddOrEven){
    console.log('hai vinto')
    } else {
        console.log('ritenta')
    }