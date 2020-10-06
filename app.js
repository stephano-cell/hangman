//Primitive value: string, number, boolean, null, undefined

//Object: myObject--> Object.prototype -->null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFUnc-->function.prototype-->Object.prototype-->null
//String: myString-->String.prototype-->Object.prototype-->null
//Number: myNumber-->Number.prototype-->Object.prototype-->null\
//Boolean: myBoolean-->Boolean.prototype-->Object.prototype-->null

const game1=new Hangman('spiderman',10)

document.querySelector('#get-puzzle').textContent=game1.getPuzzle()
document.querySelector('#guess-count').textContent=game1.guessedCount

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
game1.makeGuess(guess)
document.querySelector('#get-puzzle').textContent=game1.getPuzzle()
document.querySelector('#guess-count').textContent=game1.guessedCount
})
