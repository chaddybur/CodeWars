const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  let milesLeft = mpg * fuelLeft
  if(milesLeft >= distanceToPump){
    return true
  }else{
    return false
  }
  
};