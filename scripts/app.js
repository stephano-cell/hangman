

const getPuzzleEl = document.querySelector("#get-puzzle");
const guessCountEl = document.querySelector("#guess-count");
const statusMessageEl = document.querySelector("#status-message");

let game1 

//window event listener when someone is typing on browser to get the letters
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
render()
});

//create render
const render = ()=>{
  getPuzzleEl.innerHTML = ''
  statusMessageEl.textContent = game1.statusMessage;
  guessCountEl.textContent = `The word has ${game1.word.length} letters`;

game1.puzzle.split('').forEach((letter)=>{
const letterEl=document.createElement('span')
letterEl.textContent=letter
getPuzzleEl.appendChild(letterEl)
})
}
//start game
const startGame=async()=>{
  const puzzle=await getPuzzle('1')
  game1=new Hangman(puzzle, 6)
  render()
}

//reset game button
document.querySelector('#reset').addEventListener('click',()=>{
  startGame()
})
startGame()



