function Accumulator(startingValue){
    this.value = startingValue,
    this.read = function(){
        let new_value = +prompt("Enter new value: ", 1);
        return this.value += new_value;
    }    

}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений