/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)
/*
first of all we will enter  
(true && null) and will get null, 
then we check (3 || false)
and get 3 from there
*/