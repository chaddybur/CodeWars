
function maskify(cc) {
  let creditArr = cc.split("");
  if( creditArr.length <= 4){
    let answer = creditArr.join("")
    return answer
  }else{
    for(i= 0; i<(creditArr.length - 4); i++){
      creditArr[i] = '#'
    }
    console.log(creditArr.join(""))
  }

  
  

}
maskify('4556364607935616')