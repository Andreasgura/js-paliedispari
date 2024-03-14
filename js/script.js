/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



let typedWord = prompt('inserisci una parola')



let prova= typedWord.split('')

let letter

let reverseWord ='';
// ciao
for (let index = typedWord.length-1; index >= 0; index--) {
    letter = typedWord[index]
    reverseWord+= letter  
}
console.log(reverseWord)


// let letter2 = ""
// for (let index = letter.length-1; index > 0; index++) {
//      = letter[index];   
// }
// console.log(letter2)







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


