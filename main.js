function squareSum(numbers){
  let thing = 0; 
  for(i=0; i< numbers.length; i++){
    thing += numbers[i] ** 2
  }
  console.log(thing)
}

squareSum([1,2,3])