/*<6 Kyu> Dashatize it
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'*/

function dashatize(num) {
  //get 'em
  if(typeof num !== "number"){
    return NaN
  }
  
  let arr = Math.abs(num).toString().split("")
 
 let newArr = arr.map(e => parseInt(e))
let lastNum = newArr[newArr.length -1 ]
console.log(lastNum)
 if(lastNum % 2 !== 0){
  newArr[newArr.length -1 ]= "-" + lastNum
 }else if (newArr[0] % 2 !== 0){
   newArr[0] = newArr[0] + "-"
 }
 console.log(newArr)
  for (i= 1; i < (newArr.length -1); i++){
    if(newArr[i] % 2 !== 0){
      newArr[i] = "-"+ newArr[i]+"-"
    }
  }let answerArr = newArr.join("").split("")
  console.log(answerArr)
  for(i= 1; i < (answerArr.length - 1); i++){
    if(answerArr[i] === "-" && answerArr[(i+1)] === "-"){
      answerArr[i] = ""
    }

}
console.log(answerArr.join(""))
return answerArr.join("")
}

dashatize(11327747)
//2-7-4