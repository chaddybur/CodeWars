function productFib(prod){
  // ...
  let fib = [0,1,1]
  let i = 1
  let ans = []
  console.log(fib[fib.length- 1])
  while(fib[fib.length- 1] <= prod){
    fib.push(fib[i] + fib[i+1])
    i++
    
  }
  for(i = 0; i < fib.length; i++){
    if(fib[i] * fib[i+1] == prod){
      ans.push(fib[i])
      ans.push(fib[i + 1])
      ans.push(true)
      return ans
    }
  
  else if(fib[i] * fib[i + 1] > prod){
    ans.push(fib[i])
    ans.push(fib[i + 1])
    ans.push(false)
    return ans
  }
  

}}

productFib(4895)