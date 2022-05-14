function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  
 let num = parseFloat(mpg / 4.54609188 * 1.609344).toFixed(2)
 return Number(num)
}