function shortcut(string) {

  let str = "aeiou"
  let arr = str.split("")
  let strArr = string.split("")
  
  for(i = 0; i < strArr.length; i++){
    for(j = 0; j < arr.length; j++){
      if(strArr[i] == arr[j]){
        strArr.splice(i, 1)
        i--
      }
    }
  }
  return strArr.join("")
}