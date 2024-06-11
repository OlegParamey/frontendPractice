function moveZeros(arr) {
  let zeroes = arr.filter((element)=> element === 0)
  let nonZeroes = arr.filter((element)=> element !== 0)
  return nonZeroes.concat(zeroes)
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
