function findOdd(array) {
    const unicElements = new Set(array)

    for(let setElement of unicElements){
        let counter = 0

        for(arrElement of array){
            if(arrElement == setElement){
                counter += 1
            }
        }
        if(counter%2 !== 0){
            return setElement
        }
    }
  }

/**
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
 */

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
