const obj = {
    somekey : {ogf:213, arr: [1,2,3,4,5]},
    arr : [1,2,3,4],
    str : 'asdd'
}

const objCopy = JSON.parse(JSON.stringify(obj));

objCopy.somekey.ogf = '1234';

console.log(obj);
console.log(objCopy);