function toCamelCase(str){

  let arr = str.split('')
  console.log(arr)

  for(i = 0; i < arr.length; i++){
    if(arr[i] == '_' || arr[i] == '-'){
      arr[i] = ""
      arr[i + 1]= arr[i + 1].toUpperCase()
      console.log(arr[i + 1])
    }
  }
  
  console.log(arr.join(""))
}


toCamelCase("The-Stealth-Warrior")