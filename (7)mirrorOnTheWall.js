// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

// function mirror(data) {
//   return data.slice().sort().concat(data.reverse()) 
// }

function mirror(data) {
  const sort = data.slice().sort()
  return [...sort, ...sort.reverse().slice(1)]

}


console.log(mirror([2, 3, 1]))