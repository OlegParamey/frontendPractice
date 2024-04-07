'use strict'
function Get_X_inPowerN(x, n){
    let res = x;

    for (let i = 1; i < n; i++){
        res *= x; 
    }
    return res;
}




let x = prompt("Введите число: ",'1');
let n = prompt("Введите степень: ",'1');

if (n < 1){
    alert('Степень ' + n + ' не поддерживается.');
} else{
    alert(Get_X_inPowerN(x, n));
}


