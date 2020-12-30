// https://www.codewars.com/kata/563d54a7329a7af8f4000059/train/javascript

const buildRowText = (index, character) => {
  const str = '| | | | | | | | | | |'
  return str.substr(0, 2 * (index + 2) - 3) + character + str.substr(2 * (index + 2))
}

console.log(buildRowText(2, 'A'))