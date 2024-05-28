/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */



const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

const mult1 = ({x, y, z}) => x * y * z

const mult = (object) =>{
  const {x, y, z} = object
  return x * y * z
}

const result = mult(objectWithNumbers)
console.log(result)
//300

const result1 = mult1(objectWithNumbers)
console.log(result1)
// 300
