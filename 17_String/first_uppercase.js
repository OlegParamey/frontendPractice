'use strict'
function ucFirst(str){
    if (!str) return str;
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

alert(ucFirst("василий"));