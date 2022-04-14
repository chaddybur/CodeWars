/*<5 Kyu> Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

function pigIt(str){
  //Code here
  // grab each word into an array
	let arr = str.split(" ")
console.log(arr)
  let newArr = arr.map(e => e.split(""))
console.log(newArr)
  //loop over the array to grab the first letter and push it to the back + "ay"
  let ansArr= ''
  for(i = 0; i< newArr.length; i++) {
    if(newArr[i][0] !== '!' && newArr[i][0] !== "." && newArr[i][0] !== "?"){
    console.log(newArr[i][0])
    newArr[i].push(newArr[i][0]+'ay')
    newArr[i].shift(newArr[i][0])
    newArr[i] = newArr[i].join("")
  }}
  
  console.log(newArr)
ansArr = newArr.join(" ")
  
  console.log(ansArr)
return ansArr
  // join the array

}
pigIt('O termpor o mores .')
//'Oay', 'emporatay', 'oay', 'oresmay', '!ay'
//pigIt('Pig latin is cool');
pigIt('Hello world !');
//pigIt('This is my string');