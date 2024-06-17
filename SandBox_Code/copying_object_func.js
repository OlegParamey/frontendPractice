let user = {
  name: 'John',
  age: 30,
}

// Сама функция которая копирует объект
function GetCloneObject(object) {
  let clone = {} // новый пустой объект
  // давайте скопируем все свойства object в clone
  for (let key in object) {
    clone[key] = object[key]
  }

  return clone // возвращаем скопированный объект
}
//применяем функцию для копирования и имеем новый независимый объект
let CloneUser = GetCloneObject(user)
let NewClone = GetCloneObject(user)
// теперь CloneUser это полностью независимый объект с тем же содержимым
