function sumSalaries(obj){
    let result = 0;
    for ( let value of Object.values(obj)){
        result += value;
    }
    return result;
}


let salaries = {
    'John' : 250,
    'Gleb' : 310,
    'Adam' : 670
};
  
  alert( sumSalaries(salaries) ); // 650