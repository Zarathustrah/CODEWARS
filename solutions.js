// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// 7 kata


function disemvowel(str) {
  return str.split('').map(letter => {
    return letter.replace(/[aeiouAEIOU]/g, '')
  }).join('')
}
  
  
console.log(disemvowel('hello'))


// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// 7 kata

function descendingOrder(n){
  const num = n.toString().split('')
  num.sort((a, b) => b - a )
  return parseInt(num.join(''))
}


console.log(descendingOrder(9710002345))



// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// 7 kata

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}



console.log(isIsogram('moOse'))



// https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/javascript
// 7 kata
// function to map through numbers 
// function to select every third number 
// function to evaluate whether every third number is the product of its two predecessors 



// function sayMeOperations(str) {
//   const num = str.split()
//   num.filter(nth => {
//     return 
//   })
  
  
// }

// console.log(sayMeOperations('1 2 3 5 8'))


// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// 8 kata
var summation = function (num) {
  let result = 0
  for (let i = 0; i <= num; i += 1) {
    result += i
  }

  return result

}

console.log(summation(8))


//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// 8 kata


function hero(bullets, dragons){
  if (bullets < dragons * 2) {
    return false
  } else if (bullets % dragons === 0 || bullets > dragons * 2) {
    return true
  }
}

console.log(hero(0, 1))



function cost (mins) { 
  const oneHour = 65
  const halfHour = 30
  let price = 0
  
  if (mins <= oneHour) {
    price = 30
  } else if (mins > oneHour && mins <= oneHour + halfHour) {
    price = 40
  }
  return price 
} 

console.log(cost(102))


// does this work


// divide number of minutes by 65 and multiply

// function cost (mins) { 
//   let cost = 0
//   if (mins <= 65) {
//     cost = 30
//   } else if (mins > 65 && mins <= 95) {
//     cost = 30 + 10
//   } else if (mins > 95)
//   return cost + mins - 60 * 
// } 