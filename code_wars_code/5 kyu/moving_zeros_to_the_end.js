function moveZeros(arr) {
  return arr
    .filter((element) => element !== 0)
    .concat(arr.filter((element) => element === 0))
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
