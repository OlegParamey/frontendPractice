function findMissingLetter(array) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let j = 0
  for (
    let i = alphabet.indexOf(array[0].toLowerCase());
    i <= alphabet.indexOf(array.at(-1).toLowerCase());
    i++, j++
  ) {
    if (alphabet[i] !== array[j].toLowerCase()) {
      if (array[0] == array[0].toLowerCase()) {
        return alphabet[i]
      }
      return alphabet[i].toUpperCase()
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // 'P'
