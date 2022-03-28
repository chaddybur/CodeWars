function findSum(n) {
let count = 0
    for(i = 3; i <= n; i++){
        if(i % 3 === 0 || i % 5 === 0){
            count+= i
        }
    }
    console.log(count);
  }

  findSum(10)