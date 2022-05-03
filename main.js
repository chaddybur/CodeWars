function findDifference(a, b) {
  //loading...
  let aVol = a.reduce((a,b)=> a*b)
  let bVol = b.reduce((a,b)=> a*b)
console.log(Math.abs(aVol - bVol))
  console.log(aVol, bVol)
}


findDifference([3, 2, 5], [1, 4, 4])

//, 14)