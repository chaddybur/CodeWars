var cubeChecker = function(volume, side){  
  if(side < 1){
    return false
  }
  if(side ** 3 == volume) {
    return true
  }
  return false
};