/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

//OPTION 1
const b = [...a]

//OPTION 2
const c = JSON.parse(JSON.stringify(a))

//OPTION 3
const d = Array.from(a)

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
