// 6 KYU differences in array

function arrayDiff(a, b) {

  if(a.length >= b.length){

  for(i= 0 ; i < a.length; i++){
    for (j= 0; j < b.length; j++){
      if (a[i] === b[j]){
        a.splice(i, 1)
        i--
        console.log(a)
      }
    }
    
    }
    return a
  }
    else{
      for(i= 0 ; i < b.length; i++){
    for (j= 0; j < a.length; j++){
       if (b[i] === a[j]){
        b.splice(i, 1)
         i--
    }
      }
      }
  return b
}}

arrayDiff([1,2,3], [1,2])