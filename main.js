function stringClean(s){
  // Function will return the cleaned string
  let nums = ['0','1','2','3','4','5','6','7','8','9']
  let thing = s.split("")
  console.log(thing)
  for(i = 0; i < thing.length; i++){
    for(j=0; j < nums.length; j++){
      if(thing[i] == nums[j]){
        thing.splice(i,1)
        i--
      }
    }
  }console.log(thing)
  let ans = thing.join("")
  console.log(ans)
  
}

stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")