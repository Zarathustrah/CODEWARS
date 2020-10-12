// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

const sortArray = array => array.sort((a, b) => Math.abs(a % 2 === 0) - Math.abs(b % 2 > 0) || a - b)


console.log(sortArray([5, 3, 2, 8, 1, 4]))