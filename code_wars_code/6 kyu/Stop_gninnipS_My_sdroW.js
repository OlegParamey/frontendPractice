function spinWords(string){
    return string
    .split(' ')
    .map((word) => {
        if(word.length >= 5){
            let reversedWord = ''
            for(let i = word.length-1; i >= 0; i--){
              reversedWord += word[i]
            }
            return reversedWord
        }
        return word
    })
    .join(' ')
  }

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test" ))
console.log(spinWords("This is another test"))