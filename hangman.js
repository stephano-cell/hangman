class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessLetters = [];
    this.status = "playing";
  }

  //check if game is finished or failed (97)
  calculateStatus() {
    const isGuessCorrect = this.word.every(
      (letter) => this.guessLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "fail";
    } else if (isGuessCorrect) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  //Status message
  get statusMessage() {
    //to show wrong guesses to user
    let wrongGuesses = "";
    this.guessLetters.forEach((letter) => {
      if (!this.word.includes(letter)) {
        wrongGuesses += letter + ",";
      }
    });

    if (this.status === "fail") {
      return `Nice try. Correct word was "${this.word.join("")}"`;
    } else if (this.status === "finished") {
      return "Great job";
    } else if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}. Your Wrong guessed words are:  ${wrongGuesses}`;
    }
  }

  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      this.guessLetters.includes(letter) || letter === " "
        ? (puzzle += letter)
        : (puzzle += "*");
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    if (this.status === "fail" || this.status === "finished") {
      return;
    }
    const isUnique = !this.guessLetters.includes(guess);
    const isGoodGuess = this.word.includes(guess);

    if (isUnique && isGoodGuess) {
      this.guessLetters.push(guess);
    } else if (isUnique && !isGoodGuess) {
      this.remainingGuesses -= 1;
      this.guessLetters.push(guess);
    }

    this.calculateStatus();
  }
}

/*
const Hangman=function(word,remainingGuesses){
    this.word=word.toLowerCase().split('')
    this.remainingGuesses=remainingGuesses
    this.guessLetters=[] 
    this.status='playing'
}

//check if game is finished or failed (97)
Hangman.prototype.calculateStatus=function(){

    let isGuessCorrect=true

    this.word.forEach((letter)=>{
   
     if(this.guessLetters.includes(letter)){

        }else {
            isGuessCorrect=false
        }
   
    })
    if(this.remainingGuesses===0){
        this.status='fail'
    }else if(isGuessCorrect){
        this.status='finished'
    }else{
        this.status='playing'
    }

}

//status message
Hangman.prototype.statusMessage=function(){
    //to show wrong guesses to user
    let wrongGuesses=''
    this.guessLetters.forEach((letter)=>{
        if(!this.word.includes(letter)){
            wrongGuesses+=letter+','    
        }
        })

    if(this.status==='fail'){
        return `Nice try. Correct word was "${this.word.join('')}"`
    }else if(this.status==='finished'){
        return 'Great job'
    }else if(this.status==="playing"){
       return `Guesses left: ${this.remainingGuesses}. Your Wrong guessed words are:  ${wrongGuesses}`
    }
    
    }
Hangman.prototype.getPuzzle=function(){
let puzzle=''
this.word.forEach((letter)=>{
this.guessLetters.includes(letter) || letter===" "?puzzle+=letter:puzzle+='*'
 
})
    return puzzle
}



Hangman.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()
    if(this.status==='fail' || this.status==='finished'){
        return
    }
    const isUnique=!this.guessLetters.includes(guess)
    const isGoodGuess=this.word.includes(guess)

    if(isUnique&&isGoodGuess){

        this.guessLetters.push(guess)

    }else if( isUnique && !isGoodGuess){
        this.remainingGuesses-=1
        this.guessLetters.push(guess)
    }

    this.calculateStatus()

}

*/
