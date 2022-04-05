/* KATA NAME SHORTEST NAME <7 KYU>

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

// 

function findShort(s){
  let newArr = s.split(" ")
  console.log(newArr)
  let newNewArr = []
  newArr.forEach(e => newNewArr.push(e.length))
  console.log(newNewArr)
  let newerNewArr = newNewArr.sort((a,b)=> a-b)
  console.log(newerNewArr)
  console.log(newNewArr[0])

}

findShort("bitcoin take over the world maybe who knows perhaps")
// Should return 3