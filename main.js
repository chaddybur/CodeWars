function findOutlier(integers){
  //your code here
  let odds= 0
  let evens = 0
  let oddNumber = 0
  let evenNumber = 0
  for(i=0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      evens += 1
      evenNumber = integers[i]
      
    }else{
      odds += 1
      oddNumber = integers[i]
    }
    
    }
  if(evens === 1){
      return evenNumber
    }else{
      return oddNumber
  }
}
    findOutlier([0, 1, 2])

    // 6 Kyu Find the Parity Outlier