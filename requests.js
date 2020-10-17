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



let getCountry=async(countryCode)=>{
  const response=await fetch("https://restcountries.eu/rest/v2/all",{})
  if(response.status===200){
    let data=await response.json()
    return data=data.find((country)=>{
      return country.alpha2Code===countryCode
    })
  }else{
    throw new Error('wtf boys')
  }
}






//get location using ipinfo.io

// const getLocation=()=>{
//   return fetch('https://ipinfo.io/json?token=94a5787fd88b42').then((response)=>{
//     if (response.status===200){
//       return response.json()
//     }else{
//       throw new Error('Unable to fetch location')
//     }
//   })
// }
const getLocation=async()=>{
  const response=await fetch('https://ipinfo.io/json?token=94a5787fd88b42')
    if (response.status===200){
      let data=await response.json()
      return data
    }else{
      throw new Error('Unable to fetch location')
    }}


const getCurrentCountry=async()=>{
  let location= await getLocation()
  let country= await getCountry(location.country)
  return country.name
}




//create new puzzle by creating new promise since XMLHttp does not return promise
// const getPuzzle = (wordCount) =>{
//   return  new Promise((resolve,reject) =>{
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       resolve( data.puzzle);
//     } else if (e.target.readyState === 4) {
//       reject("error has taken place");
//     }
//   });

//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// })}







//get a puzzle without await
// const getPuzzle=(wordCount)=>{
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
//     if(response.status===200){
//       return response.json()
//     }else{
//       throw new Error('puzzle response failed')
//     }
//   }).then((data)=>{
//     return data.puzzle
//   })
// }