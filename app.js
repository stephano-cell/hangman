//HTTP (Hyper text Protocol)
//Request - What do we want to do
//Response - What was actually done

//call back function for puzzlerequest


const getPuzzleEl = document.querySelector("#get-puzzle");
const guessCountEl = document.querySelector("#guess-count");
const statusMessageEl = document.querySelector("#status-message");

let game1 


window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
render()
});

const render = ()=>{
  getPuzzleEl.textContent = game1.puzzle;
  statusMessageEl.textContent = game1.statusMessage;
  guessCountEl.textContent = `The word has ${game1.word.length} letters`;
}

const startGame=async()=>{
  const puzzle=await getPuzzle('1')
  game1=new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click',()=>{
  startGame()
})
startGame()





//get puzzle with fetch
// getPuzzle(1).then((puzzle)=>{
//   console.log(puzzle)
//   }).catch((error)=>{
//   console.log(error)
//   })

//get country from ip api with getCountry   
//  

// get location form ip api and chain with getCountry
// getLocation().then((location)=>{
// return getCountry(location.country)
// }).then((country)=>{
//  console.log(country.name)
// }).catch((error)=>{
//   console.log(error)
// })


// get puzzle with XMLHttp
// console.log(getPuzzle(1).then((puzzle)=>{
//   console.log(puzzle)
//  },(err)=>{
//    console.log(err)
//  })
// ) 