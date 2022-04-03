function noSpace(x){
  let arr = x.split("");
  console.log(arr)
  for(i = 0; i < arr.length; i++){
    if(arr[i]=== " "){
      arr.splice(i,1)
      i--
    }
  }
  console.log(arr.join(''))

}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')