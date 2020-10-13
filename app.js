//HTTP (Hyper text Protocol)
//Request - What do we want to do
//Response - What was actually done

const getPuzzleEl = document.querySelector("#get-puzzle");
const guessCountEl = document.querySelector("#guess-count");
const statusMessageEl = document.querySelector("#status-message");

const game1 = new Hangman("yolo", 10);

getPuzzleEl.textContent = game1.puzzle;
statusMessageEl.textContent = game1.statusMessage;

guessCountEl.textContent = `The word has ${game1.word.length} letters`;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  getPuzzleEl.textContent = game1.puzzle;
  guessCountEl.textContent = `The word has ${game1.word.length} letters`;
  statusMessageEl.textContent = game1.statusMessage;
});

let yolo = getPuzzle((error, puzzle) => {
  if (error) {
    console.log(error);
  } else {
    console.log(puzzle);
  }
});

//Making an HTTP request

// const countryCode = "MX";
// const requestCountry = new XMLHttpRequest();
// requestCountry.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const allCountries = JSON.parse(e.target.responseText);
//     const findCountry = allCountries.find((country) => {
//       return country.alpha2Code === countryCode;
//     });
//     console.log(findCountry.name);
//   } else if (e.target.readyState === 4) {
//     console.log("Unable to fetch data");
//   }
// });

// requestCountry.open("GET", "https://restcountries.eu/rest/v2/all");
// requestCountry.send();
