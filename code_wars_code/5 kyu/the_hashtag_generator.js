function generateHashtag (str) {
    if(!str.trim()){
        return false
    }
    let hashtag = '#' + str
    .split(' ')
    .filter(element => element.trim())
    .map((element)=>element[0].toUpperCase() + element.slice(1).toLowerCase())
    .join('');

    return hashtag.length > 140 ? false : hashtag
    
}
const str = "    Hello     World   "
console.log(generateHashtag("Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(""))