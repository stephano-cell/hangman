//Assynch HTTP request for puzzle from puzzle.mead
//with async-await
const getPuzzle=async(wordCount)=>{
  const response=await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status===200){
    let data=await response.json()
  return data=await data.puzzle
  }else {
    throw new Error('cant load new puzzle')
  }
}