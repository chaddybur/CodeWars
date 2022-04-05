/* KATA NAME: JADEN CASING STRINGS <7 KYU>

For simplicity, 
you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in 
the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/

function toJadenCase(str){ 
  //separate each word into an array
  let newArr = str.split(" ")
  console.log(newArr)
  // separate each letter in each word into an array
  let newNewArr = newArr.map(e => e.split(""))
  console.log(newNewArr)
  // uppercase each letter[0] TAKE 2 SECOND TRY! FUCk.
  let answer = ""
  for(i = 0; i < newNewArr.length; i++){
    newNewArr[i][0] = newNewArr[i][0].toUpperCase()
    console.log(newNewArr[i])
    answer += newNewArr[i].join("") + " "
  }
  console.log(answer)
  
  // join letter and then words


};

toJadenCase("What the hell is wrong with this codewars?")