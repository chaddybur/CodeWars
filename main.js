function duplicateCount(text){
  //...
  let arr = text.toLowerCase().split("")
  console.log(arr)
  let newObj = arr.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
  console.log(newObj)
  let numArr = Object.values(newObj)
  console.log(numArr)
  let counter= 0 
  for (i = 0; i < numArr.length; i++){
    if(numArr[i]> 1){
      counter += 1
    }
  }
  return counter
 
}

duplicateCount("abbcsdfecsxxxa")

//6 KYU Counting Duplicates