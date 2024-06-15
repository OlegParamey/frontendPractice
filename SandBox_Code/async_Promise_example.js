const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()    
    return json
}

getData('https://jsonplaceholder.typicode.com/todos/2')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))