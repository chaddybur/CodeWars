/* <6 KYU> UNIQUE IN ORDER
Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder=function(iterable){
  let newArr = []
  console.log(typeof iterable)
  if(typeof iterable !== Array){
    newArr = iterable.split("")
  }else{
    newArr = iterable
  }
  console.log(newArr)

let newObj = newArr.reduce((obj, item)=>{
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(newObj)
console.log(Object.keys(newObj))

}
uniqueInOrder('AAAABBBCCDAABBB')

/*uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

