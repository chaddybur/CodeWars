/* CODE WARS: WHO LIKE IT? <6 KYU>


*/
// 8. Reduce Exercise
    // Sum up the instances of each of these
    /*const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation); 
    
    HAD TO LOOK UP AGAIN HOW TO USE REDUCE TO COUNT. ADDED TO ANKI*/

    function count (string) {  
      newArr = string.split("")

      let answer = newArr.reduce(function(obj, item){
        if(!obj[item]){
          obj[item] = 0 
        }
        obj[item]++;
        return obj;
      }, {})
      // The function code should be here
       return answer;
    }