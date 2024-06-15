async function myAsyncFn(){
    throw new Error('There was an error!')
}

myAsyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))