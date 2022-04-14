function reverseWords(str) {
  // Go for it
  let arr = str.split(" ")
  let newArr = arr.map(e => e.split("").reverse().join(""))
  let answerStr = newArr.join(" ")
  return answerStr
}
//easy 7Kyu Reverse