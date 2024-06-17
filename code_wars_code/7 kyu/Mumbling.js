/*
function accum(string) {
  let i = 0
  let j = 0
  let accumulated = ''
  for (char of string) {
    accumulated += char.toUpperCase()
    while (j < i) {
      accumulated += char.toLowerCase()
      j++
    }
    j = 0
    i++
    if (i < string.length) {
      accumulated += '-'
    }
  }
  return accumulated
}
*/

function accum(string) {
  return string
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-')
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
