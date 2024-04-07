let calculator = {
    a : 0,
    b : 0,
    read(){
        this.a = +prompt("Enter first number: ","0");
        this.b = +prompt("Enter second number: ","0");
        
    },
    sum(){
        return (this.a + this.b);
    },
    mul(){
        return (this.a * this.b);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );