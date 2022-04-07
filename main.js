
let newNewArr = []
function removeEveryOther(arr){
  //your code here
  let newArr = []
  for(i=0; i < arr.length; i++){
    if(i % 2 === 0){
      newArr.push(arr[i])
    }
    
  }console.log(newArr)
  console.log(arr)
}

removeEveryOther(["bob", "dave", "joe", "smith"])