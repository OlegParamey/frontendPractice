function sumToR(n){
    if( n == 1 ) return n;
    return n + sumToR(n - 1);    
}

function sumToFor(n){
    let res = 0;
    for(let i = 1; i<=n; i++){
        res += i;   
    }
    return res;
}

function sumToA(n) {
    return (n * (n + 1)) / 2;
  }



alert(sumToR(1)); //= 1
alert(sumToR(2)); //= 2 + 1 = 3
alert(sumToR(3)); //= 3 + 2 + 1 = 6
alert(sumToR(4)); //= 4 + 3 + 2 + 1 = 10
alert(sumToR(100)); //= 100 + 99 + ... + 2 + 1 = 5050

alert(sumToFor(1)); //= 1
alert(sumToFor(2)); //= 2 + 1 = 3
alert(sumToFor(3)); //= 3 + 2 + 1 = 6
alert(sumToFor(4)); //= 4 + 3 + 2 + 1 = 10
alert(sumToFor(100)); //= 100 + 99 + ... + 2 + 1 = 5050

alert(sumToA(1)); //= 1
alert(sumToA(2)); //= 2 + 1 = 3
alert(sumToA(3)); //= 3 + 2 + 1 = 6
alert(sumToA(4)); //= 4 + 3 + 2 + 1 = 10
alert(sumToA(100)); //= 100 + 99 + ... + 2 + 1 = 5050