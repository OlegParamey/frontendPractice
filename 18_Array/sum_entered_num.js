function sumInput(){

    let arr =[];
    let suma = 0;

    while(true){
        let value = (prompt("Введите числа для отображения их сумы: ", "0"));

        if (value === "" || value === null || !isFinite(value)){
             break;}
                
        arr.push(+value);
        }

    for(let num of arr){
        suma += +num;
    }
    return suma;
}
alert(sumInput());