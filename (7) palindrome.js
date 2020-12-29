function palindromeChainLength(num) {
  const reverseNum = parseInt( (num + '').split('').reverse().join('') )
  if (num !== reverseNum) {
    return 1 + palindromeChainLength(reverseNum + num)
  }
  return 0
}

console.log(palindromeChainLength(789))

