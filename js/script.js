// Parte 1

// *Consegna*
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
// Poi procedete ad implementare il bonus come segue.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const startBtn = document.querySelector('button');

startBtn.addEventListener('click', function(){
    const totalSquare = 100;
    const playground =document.getElementById('playground');
    for(let i = 0; i < totalSquare; i++){
        let square = appearSquare(i, totalSquare);
        playground.append(square);
    }
});

function appearSquare(squareNum, totalSquare){
    const squareWidth = Math.sqrt(totalSquare)
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareNum + 1;
    square.addEventListener('click', function(){
        square.classList.add('square-bg');
    })
    return square;
}