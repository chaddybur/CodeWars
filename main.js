function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let age = []
    age.push(age1,age2,age3,age4,age5,age6,age7,age8)
    let newAge = age.map(element => element*= element)
    let ans = newAge.reduce((a,b) => a+b)
    let answer = Math.sqrt(ans) / 2
    console.log(answer)
  }

  predictAge(65,60,75,55,60,63,64,45)