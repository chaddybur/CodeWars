function tripleTrouble(one, two, three){
  //Solution
  
  let arr = []
  
  let arr1 = one.split("")
  let arr2 = two.split("")
  let arr3 = three.split("")
  
  for(i = 0; i < arr1.length; i++){
    arr.push(arr1[i])
    arr.push(arr2[i])
    arr.push(arr3[i])
  }
  return arr.join("")
 }