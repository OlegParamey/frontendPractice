const array = [1, 2, 3, 4, 5];
array.length = 100;
array.forEach((elem, index)=> console.log('element:',elem, 'index:', index));
console.log(array.pop());

console.log(array.length);