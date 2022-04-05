/* NAME OF KATA: Exes and Ohs <7 KYU>
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

//STEPS
// make everything lowercase
function XO(str) {
  let lowStrang = str.toLowerCase();
  console.log(lowStrang)
// turn string into array?
let lowStrangArr = lowStrang.split("");
console.log(lowStrangArr)

//have a counter for x and a counter for o
let counterO = 0
let counterX = 0
for(i = 0; i < lowStrangArr.length; i++){
  if(lowStrangArr[i] === 'o'){
    counterO += 1
  }else if(lowStrangArr[i] === 'x'){
    counterX += 1
  }
}
if(counterO === counterX){
  console.log(true)
}else{
  console.log(false)
}

//check to see if both counters are the same
//return true if they are the same
//return false if they are not the same
}
XO("ooxx") 
XO("xooxx") 
XO("ooxXm") 
XO("zpzpzpp") 
XO("zzoo")