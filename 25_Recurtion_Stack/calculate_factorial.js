function factorial(n){
    if( n == 1 ) return n;
    return n * factorial(n - 1);    
}

alert( factorial(5) ); // 120
alert( factorial(6) ); // 720
alert( factorial(2) ); // 2
alert( factorial(1) ); // 1