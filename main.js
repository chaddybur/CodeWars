function points(games) {
  
  let thing = games.map(e => e.split("") )
   console.log(thing)
   let counter = 0
   for(i = 0; i< thing.length; i++){
     
     if(thing[i][0] > thing[i][2]){
       counter += 3
     }else if(thing[i][0] == thing[i][2]){
       counter += 1
     }
     
   }
   return counter
 }
 
 points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
 points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])