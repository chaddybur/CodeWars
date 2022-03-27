var countSheep = function (num){
    //your code here
    let str = ""
    for (i = 1; i <= num; i++){
      str += str + `${i} sheep...`
      
    }
    console.log(str)
  }
  countSheep(5)