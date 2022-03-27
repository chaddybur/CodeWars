var countSheep = function (num){
    //your code here
    let str = ""
    if( num === 0){
        console.log("")  
    }
    else{
    for (i = 1; i <= num; i++){
      str += `${i} sheep...`
      
    }
    console.log(str)
  }};
  countSheep(5)