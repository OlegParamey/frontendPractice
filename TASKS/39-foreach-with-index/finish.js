/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

function cityInfo (element, key){
    return `${element} is at the index ${key} in the myCities array`
    
}

const myCities = ['London', 'New York', 'Singapore']

myCities.forEach((city, index)=> console.log(cityInfo(city, index)));