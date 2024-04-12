function makeCounter() {
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;

    counter.set = value => count = value;

    counter.decrease = () => count--;
  
    return counter;
  }
  
  let count = makeCounter();
  alert( count() ); // 0
  alert( count() ); // 1