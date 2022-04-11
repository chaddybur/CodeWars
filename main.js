function arrayDiff(a, b) {
  let answer = [];
  let newStr = 	a.join("") + b.join("")
  
  let newArr = newStr.split("")
 
  let newObj = newArr.reduce(function(obj, item){
    	if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

  let vals = Object.values(newObj);
  let keys = Object.keys(newObj);
  for(i = 0; i < vals.length; i++){
  if(vals[i] === 1){
    answer.push(parseInt(keys[i]))
  }
  
}
  return answer;
}
arrayDiff([1,2,2], [1]);