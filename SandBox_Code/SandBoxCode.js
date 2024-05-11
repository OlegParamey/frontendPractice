function Sum(a, b){
  return console.log(a + b) 
}

function conslog(){
  console.log('There is no numbers.')
}

const val1 = 0;
const val2 = 0;

typeof(val1) == 'number' && typeof(val2) == 'number'
? Sum(val1, val2)
: conslog()