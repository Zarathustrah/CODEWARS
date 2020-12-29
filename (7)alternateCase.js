// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
  const newStr = s.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
  return newStr.join('')
  
}

console.log(alternateCase('ABc'))