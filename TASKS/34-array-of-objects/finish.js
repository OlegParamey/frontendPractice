/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars =[
    {
        carbrand : "Honda",
        price : 100000,
        isAvailableForSale : true
    },{
        carbrand : "Toyota",
        price : 200000,
        isAvailableForSale : false
    },{
        carbrand : "Mitsubishi",
        price : 150000,
        isAvailableForSale : true
    }
];

const newCar = {
    carbrand : "Suzuki",
    price : 230000,
    isAvailableForSale : false
}

cars.push(newCar);
console.log(cars);