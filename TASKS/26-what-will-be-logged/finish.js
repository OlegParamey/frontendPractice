/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Привет из функции fn
 * true
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
    console.log(a)
  }
}

fn()(true)
