//Primitive value: string, number, boolean, null, undefined

//Object: myObject--> Object.prototype -->null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFUnc-->function.prototype-->Object.prototype-->null
//String: myString-->String.prototype-->Object.prototype-->null
//Number: myNumber-->Number.prototype-->Object.prototype-->null\
//Boolean: myBoolean-->Boolean.prototype-->Object.prototype-->null


const getPuzzleEl=document.querySelector('#get-puzzle')
const guessCountEl=document.querySelector('#guess-count')
const statusMessageEl=document.querySelector('#status-message')
const game1=new Hangman('superman yolo',10)

getPuzzleEl.textContent=game1.getPuzzle
statusMessageEl.textContent=game1.statusMessage

guessCountEl.textContent=`The word has ${game1.word.length} letters`


window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    getPuzzleEl.textContent=game1.getPuzzle
    guessCountEl.textContent=`The word has ${game1.word.length} letters`
    statusMessageEl.textContent=game1.statusMessage

})
