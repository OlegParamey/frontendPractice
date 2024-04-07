function getAverageAge(array){
    return array.reduce((num, current) => num + current.age, 0) / array.length;
}





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28

