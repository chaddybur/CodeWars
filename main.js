/* CODE WARS: Highest Scoring Word <6 KYU>
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/
//PREP new to assign each lower case letter a value.
// value 0 = 0, then each letter should be 1,2,3 etc.

function high(x){

let alpha = [0,"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"]

let newArr = x.split(" ")
let newNewArr = []
let number = []
  newArr.forEach(e => newNewArr.push(e.split("")))

  for(i = 1; i < alpha.length; i++){
    for(j = 0; j < newNewArr.length; j++){
      for(k = 0; k < newNewArr[j].length; k++){
        if(newNewArr[j][k] === alpha[i]){
          newNewArr[j][k] = i
        } 
        
      }
    
      
    
    }
    
    }
    console.log(newNewArr)
  
  for(z = 0; z < newNewArr.length; z++){
    number.push(newNewArr[z].reduce((a,b) => a + b))
  }
  let answer = Math.max(number)
  console.log(answer[answer.length - 1])

  }
high("the store is over there")