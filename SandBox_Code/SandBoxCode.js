const fnWithError = () => {
    throw new Error('Some error')
}
try{
fnWithError();
}catch (error){
    console.error(error);
    console.log(error.message);
}
console.log('Continue');

try{
    const a =1;
    a = 3;
} catch(error){
    console.error(error);
    console.log(error.message)
}
console.log('Continue');