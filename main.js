function findOdd(A) {
	let newArr = []
  let newObj = A.reduce(function(obj, item){
		if (!obj[item]) {
        obj[item] = 0;
      };
      obj[item]++;
      return obj;
    }, {});
  console.log(newObj)
  let newKeys = []
  newKeys = Object.keys(newObj)
  console.log(newKeys)
 newArr = Object.values(newObj)
  console.log(newArr)
for(i = 0; i < newArr.length; i++){
  if(newArr[i] % 2 !== 0){
    return parseInt(newKeys[i])
  }
}
  
}