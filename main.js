//6 KYU Two to One

function longest(s1, s2) {
  // your code
  let con = s1.concat(s2)
  let conArr = con.split("")
  const sorted = conArr.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
  let thing = Object.keys(sorted)
  console.log(thing)
  let answer = thing.sort();
  return answer.join("")

}

longest("aretheyhere", "yestheyarehere")
//, "aehrsty")