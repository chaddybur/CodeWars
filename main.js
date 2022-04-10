/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
function duplicateEncode(word){
  let arr = word.toLowerCase().split("");
let multiples = []
let answer = []
console.log(arr)
let newObj = arr.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

let valueArray = Object.values(newObj)
let keyArray = Object.keys(newObj)
console.log(keyArray)
console.log(valueArray)

for(i = 0; i < valueArray.length; i++){
  if(valueArray[i] > 1){
    multiples.push(keyArray[i])
  }
  console.log(multiples)
}
for(i = 0; i < arr.length; i++){
  for (j = 0; j < multiples.length; j++){
    if(arr[i] === multiples[j]){
      arr[i] = ")"
    }
  }
}console.log(arr)

for(i = 0; i < arr.length; i++){
  if(arr[i] !== ')'){
    arr[i] = '('
  }
  
}
console.log(arr.join(""))
  
  
  
// }

}


duplicateEncode(" ( ( )")

//"()()()"