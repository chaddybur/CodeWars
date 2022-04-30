function removeExclamationMarks(s) {
  let arr = s.split("")
console.log(arr)
let filtered = arr.filter(e => e != "!")
return filtered.join("")

}

