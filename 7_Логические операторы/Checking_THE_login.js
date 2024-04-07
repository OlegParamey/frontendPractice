let login = prompt('Введите ваш логин: ','');

if ( login == "админ" ){

    let password = prompt('Введите ваш Пароль: ','');

    if ( password == "1111" ) {
        alert("Здравствуйте!");
    } else if( password === '' || password == null ) {
        alert("Отменено!");
    } else {
        alert("Неверный пароль!");
    }

} else if ( login === '' || login == null ){
    alert("Отменено!");
} else {
    alert("Я не знаю вас!");
}





