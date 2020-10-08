// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

// function twoOldestAges(ages){
//   return ages.sort((a, b) => {
//     return b - a
//   }).slice(0, 2).reverse()
  
// }



const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)

console.log(twoOldestAges( [1, 2, 10, 8] ))