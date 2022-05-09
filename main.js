function printerError(s) {
  let err = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  let arr = s.split("")
  let total = arr.length
  let counter = 0
  
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < err.length; j++){
      console.log(arr[i], err[j])
      if(arr[i] == err[j]){
        counter += 1
      }
    }
   
  }

  console.log(`${counter}/${total}`)
  return `${counter}/${total}`
}


printerError("abctdex")