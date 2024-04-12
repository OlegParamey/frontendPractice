function makeCounter() {
    let count = 0;

    counter = () => count++;

    counter.current = () => count;

    counter.set = value => count = value;

    counter.decrease = () => count--;
  
    return counter;
  }
  
  let count = makeCounter();
  alert( count() ); // 0
  alert( count() ); // 1
  alert( count.current() );
  alert(count.set(10));
  alert(count.decrease());
  alert(count.decrease());
  alert(count.decrease());
  alert(count.decrease());