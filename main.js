function mergeArrays(arr1, arr2) {
    
    arr2.forEach(element => arr1.push(element))
    
    console.log(arr1)
    let ans = arr1.sort((a,b) => a-b )

  }

  mergeArrays([1,2,3,4], [5,6,7,8])