/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(`Сообщение номер ${current}`);
      if (current < to) {
        setTimeout(go, 2000);
      }
      current++;
    }, 2000);
  }
  
  // использование:
  printNumbers(1, 5);