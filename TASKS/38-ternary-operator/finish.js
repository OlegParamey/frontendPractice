/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */
//ЗАДАЧА 1
function isArrayEmpty1(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  return 'Массив пустой'
  
}

//ЗАДАЧА 2
function isArrayEmpty2(inputArray) {
 return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}

//ЗАДАЧА 3
const isArrayEmpty3 = (inputArray) => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'

//1
console.log(isArrayEmpty1([1, 3]))
console.log(isArrayEmpty1([]))

//2
console.log(isArrayEmpty2([1, 3]))
console.log(isArrayEmpty2([]))

//3
console.log(isArrayEmpty3([1, 3]))
console.log(isArrayEmpty3([]))
