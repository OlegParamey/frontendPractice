let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function SumSalaries(object){
    let suma = 0; 
    for(let key in object){
        suma += object[key];
    }
    return suma;
}

alert(SumSalaries(salaries));