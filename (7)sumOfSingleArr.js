// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript


function repeats(arr){
 const noRepeat = [...new Set(arr)]
 return noRepeat
}

console.log(repeats([9, 10, 19, 13, 19, 13]))