/* <6 KYU> UNIQUE IN ORDER
Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder=function(iterable){
  let newArr = [];
  
  if(typeof iterable === "string"){
    newArr = iterable.split("")
  }else{
    newArr = iterable
  }
  for(i = 0; i < (newArr.length - 1); i++){
    if(newArr[i]=== newArr[i+1]){
      newArr.splice((i+1), 1);
      i--
    }
  }
  console.log(newArr)

}
uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD') 
uniqueInOrder([1,2,2,3,3])


/*uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */
