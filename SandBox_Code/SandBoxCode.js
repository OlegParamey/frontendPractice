function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

let my_Array= [1, 2, 3, 4, 5, 6];

let factorialResults = my_Array.map(factorial);

console.log(factorialResults); // Выводит: [1, 2, 6, 24, 120]