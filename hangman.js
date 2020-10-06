//1. Display the puzzle to the browser instead of the console
//2. Display the guesses left to the browser instead of console
//3. Separate the Hangman definition from the rest of the app code (use app.js)

const Hangman=function(word,remainingGuesses){
    this.word=word.toLowerCase().split('')
    this.guessedCount=remainingGuesses
    this.guessLetters=[] 
}

Hangman.prototype.getPuzzle=function(){
let puzzle=[]
this.word.forEach((letter)=>{
    this.guessLetters.includes(letter) || letter===" "?puzzle+=letter:puzzle+='*'
})
    return puzzle
}

Hangman.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()

    const isUnique=!this.guessLetters.includes(guess)
    const isGoodGuess=this.word.includes(guess)

    if(isUnique&&isGoodGuess){

        this.guessLetters.push(guess)

    }else if( isUnique && !isGoodGuess){
        this.guessedCount-=1
        this.guessLetters.push(guess)
    }
}