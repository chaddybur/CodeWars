var number = function(busStops){
    // Good Luck!
let arr = []
    busStops.forEach(element => arr.push(element[0] - element[1]))
    let ans = arr.reduce((a,b) => a + b, 0);
    
    console.log(ans)
  }


  number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])