function getMiddle(s)
{
  //Code goes here!
let newArr = s.split("")
console.log(newArr)
if(newArr.length % 2 === 0){
    let mid = newArr.length/ 2
    let newNew = []
    newNew.push(newArr[mid-1])
    newNew.push(newArr[mid])
    let ans =newNew.join("")
    console.log(ans)

}
else{
    let mid = parseInt(newArr.length / 2)
    console.log(newArr[mid])
    
}

}


getMiddle("testings")
getMiddle("testing")