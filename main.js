function foldArray(array, runs)
{
  if(array.length % 2 != 0){
    let middle = Math.floor(array.length / 2)
    console.log(middle)
    let i = 0
   while(i < middle){
     
      array[i] = array[i] + array[array.length -1]
      array.pop()
      i++
    }
  }else{
    let middle = Math.floor(array.length / 2)
    console.log(middle)
    let i = 0
   while(i < middle){
     
      array[i] = array[i] + array[array.length -1]
      array.pop()
      i++
    }
  }
  console.log(array)
}

input = [ 1, 2, 3, 4, 5, 6];

foldArray(input, 1)