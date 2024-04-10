function makeArmy() {
    let shooters = [];
  
    for (let i=0; i < 10; i++) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
     
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();
  
  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  army[9](); // 10 от стрелка с порядковым номером 0
  army[1](); // 10 от стрелка с порядковым номером 1
  army[6](); // 10 ...и т.д.
  army[3]();
 