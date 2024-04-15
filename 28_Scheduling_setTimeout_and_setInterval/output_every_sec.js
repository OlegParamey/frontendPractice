function printNumbersTimeOut(from, to){
    let current = from;
    setTimeout(function go(){
        alert(current);
        if (current < to){
          setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

function printNumbersInterval(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

printNumbersTimeOut(5, 10);
printNumbersInterval(5, 10);