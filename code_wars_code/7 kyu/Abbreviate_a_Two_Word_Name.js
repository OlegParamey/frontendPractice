function abbrevName(name) {
  const arr = name.split(' ')
  return (
    arr[0].slice(0, 1).toUpperCase() + '.' + arr[1].slice(0, 1).toUpperCase()
  )
}

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('patrick feeney'))
