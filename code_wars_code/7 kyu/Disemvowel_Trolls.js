/*function disemvowel(str) {
  const vovels = ['e', 'u', 'i', 'o', 'a']
  return str
    .split(' ')
    .map((word) => {
      let noVovelWord = ''
      for (char of word) {
        if (!vovels.includes(char.toLowerCase())) {
          noVovelWord += char
        }
      }
      return noVovelWord
    })
    .join(' ')
}
*/

function disemvowel(str) {
  return str.replace(/[aieou]/gi, '')
}
console.log(disemvowel('This website is for losers LOL'))
