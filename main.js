function positiveSum(arr) {
    let nums = 0
    for(i = 0; i < arr.length; i++){
    
      if(arr[i] >= 0){
       nums = nums + arr[i]
      }
    }
    console.log(nums)
  }

  positiveSum([1,2,3,4,5])