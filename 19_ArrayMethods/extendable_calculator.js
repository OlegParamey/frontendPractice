function Calculator(){
  this.methods = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b 
  };
  this.calculate = function(str){
    let splitted = str.split(' ');
    a = +splitted[0];
    op = splitted[1];
    b = +splitted[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)){
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func){
    return this.methods[name] = func;
    };
  }




let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8