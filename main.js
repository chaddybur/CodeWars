function sumMul(n,m){
  //your idea here
    if(n < 1 || m < 1){

      console.log("INVALID")
      return "INVALID"
    }
    let arr = [];
    
    for(i = n; i < m; i += n){
      arr.push(i)
    }
    console.log(arr.reduce((a,b)=> a + b))
    return arr.reduce((a,b)=> a + b)
  }

  sumMul(2,9)
  //20
  //,,"INVALID")