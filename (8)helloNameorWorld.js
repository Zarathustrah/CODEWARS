// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

// function hello(name) {
//   if (!name) {
//     return 'Hello, World!'
//   } else {
//     return 'Hello,' + ' ' + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) + '!'
//   }
// }

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`

console.log(hello('johN'))
console.log(hello())