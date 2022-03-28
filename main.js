const flip=(d, a)=>{
    //TODO
    if(d === "R"){
      a.sort((a,b) => a-b)
    }
    else{
        a.sort((a,b) => b-a)
    }
    
    console.log(a)
  }

  flip("L", [3,5,2,1,6,9])