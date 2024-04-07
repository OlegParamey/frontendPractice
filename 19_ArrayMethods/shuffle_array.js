
//Тасование Фишера — Йетса

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание" - "destructuring assignment"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
alert(arr);

shuffle(arr);
// arr = [2, 1, 3]
alert(arr);

shuffle(arr);
// arr = [3, 1, 2]
alert(arr);