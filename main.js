function digital_root(n) {
  
  let ans = 0
function splitAndAdd(x){
  let arr = []
  let numArr = []
  if(typeof x === "number"){
    arr = x.toString().split("")
  }else{
    arr = x
  }
	arr.forEach((e) => numArr.push(parseInt(e)));
   console.log(numArr)
  ans = numArr.reduce((a,b)=> a+b, 0)
  return ans 
}
  splitAndAdd(n)
while(ans > 9){
  splitAndAdd(ans)
  console.log(ans)
}
  return ans
}


digital_root(4560823094828)