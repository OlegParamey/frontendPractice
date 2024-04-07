'use strict';
let number;

do {
  number = prompt("Введите число, большее 100", '');
} while ((number !== null && isNaN(number)) || (number !== null && Number(number) <= 100));

if (number !== null) {
  alert("Спасибо! Вы ввели число больше 100: " + number);
} else {
  alert("Вы отменили ввод.");
}