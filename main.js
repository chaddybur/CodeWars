
function well(x){
  
  let arr = x.filter(e=> e =="good")

  if(arr.length == 0){
    return "Fail!"
  }else if(arr.length < 3){
    return "Publish!"
  }else{
return "I smell a series!"
  }
  

}

well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])

//, 'I smell a series!')