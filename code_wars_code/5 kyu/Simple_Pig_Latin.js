function pigIt(str) {
  return str
    .split(' ')
    .map((element) => {
      if (/[a-zA-Z]/.test(element)) {
        return element.slice(1) + element[0] + 'ay'
      } else {
        return element
      }
    })
    .join(' ')
}

console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')) // elloHay orldway !
