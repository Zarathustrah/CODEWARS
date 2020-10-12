// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript

function reverseLetter(str) {
  const regex = /[a-z]/ig
  const result = str.match(regex).reverse().join('')
  return result
}

console.log(reverseLetter('hello'))

// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');