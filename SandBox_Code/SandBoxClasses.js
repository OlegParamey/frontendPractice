class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0)
  }
}

const myArray = new NumbersArray(2, 5, 7, 7)
console.log(myArray.sum())
console.log(myArray)
