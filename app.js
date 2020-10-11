//HTTP (Hyper text Protocol)
//Request - What do we want to do
//Response - What was actually done

const getPuzzleEl=document.querySelector('#get-puzzle')
const guessCountEl=document.querySelector('#guess-count')
const statusMessageEl=document.querySelector('#status-message')
const game1=new Hangman('superman yolo',10)

getPuzzleEl.textContent=game1.getPuzzle
statusMessageEl.textContent=game1.statusMessage

guessCountEl.textContent=`The word has ${game1.word.length} letters`


window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    getPuzzleEl.textContent=game1.getPuzzle
    guessCountEl.textContent=`The word has ${game1.word.length} letters`
    statusMessageEl.textContent=game1.statusMessage

})

 //Making an HTTP request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText)
    console.log(data)
    }else if (e.target.readyState ===4){
        console.log('An error has taken place')
    }
})

request.open('GET','http://puzzle.mead.io/puzzle')
request.send()