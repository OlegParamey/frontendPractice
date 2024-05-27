/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

//we can invoke the function before it's declaration
//console.log(firstFunction(2, 4))

function firstFunction(a, b) {
  return a + b
}
//we can assign new value
//firstFunction = 2;
//console.log(firstFunction)

//------------------------------------------------------------------------

//We can't invoke the function before it's declaration
//secondFunction(2, 6)

const secondFunction = function (a, b) {
  return a + b
}
//We can't assing new value to the function
//secondFunction = 2

console.log(firstFunction(5, 5))
console.log(secondFunction(1, 5))