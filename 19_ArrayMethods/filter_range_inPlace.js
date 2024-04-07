function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }


let arr = [5, 3, 8, 1, 5, 2, 1];

filterRangeInPlace(arr, 2, 5); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]