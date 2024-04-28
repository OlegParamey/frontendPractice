//'ABCDDDEFGHI'
const GetTheLongestStringWithUnicCharacters = (str) => {
    const arr = [''];
    let index = 0;
    for (char of str){
        
        if (arr[index].includes(char)){
            index += 1;
            if (arr[index] === undefined){
                arr[index] = '';
            }
        }
        
        arr[index] = arr[index] + char;
        
    } 
    return arr;
}

console.log(GetTheLongestStringWithUnicCharacters('ABCDDDEFGHI'));