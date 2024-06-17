function humanReadable(seconds) {
  if (seconds > 359999) {
    return ''
  }
  let HH = Math.floor(seconds / 3600)
  let MM = Math.floor((seconds - HH * 3600) / 60)
  let SS = seconds - (HH * 3600 + MM * 60)

  return `${HH ? (HH < 10 ? `0${HH}` : HH) : '00'}:${
    MM ? (MM < 10 ? `0${MM}` : MM) : '00'
  }:${SS ? (SS < 10 ? `0${SS}` : SS) : '00'}`
}

console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))
console.log(humanReadable(359999))
