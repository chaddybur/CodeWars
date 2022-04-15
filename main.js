// <6 KYU> Persistent Bugger. FIRST TRY

function persistence(num) {
  //code me
 let counter = 0
 let answer = 11
 if (num < 10){
   return 0
 }else {
   newArr = num.toString().split("")
   
   while(answer > 9){
 
    console.log(newArr)
   answer = newArr.reduce((a,b) => Number(a) * Number(b))
   newArr = answer.toString().split("")
   counter += 1
    console.log(counter)
    console.log(answer)
  }
 }
}

//persistence(39)
//3

//persistence(4)

//0
//persistence(999)

// 2