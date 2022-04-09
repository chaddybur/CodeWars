function spinWords(string){
  //TODO Have fun :)
  let newArr = string.split(" ")
  console.log(newArr)
  for(i = 0; i < newArr.length; i++){
    if(newArr[i].length >= 5 ){
       newArr[i]= newArr[i].split("").reverse().join("")
    }
  
  }
  return newArr.join(' ')
}
spinWords("Welcome to Door County")