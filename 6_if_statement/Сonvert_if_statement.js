let result1;

if (a + b < 4) {
  result1 = 'Мало';
} else {
  result1 = 'Много';
}
//---------->
let result = (a + b < 4) ? "Мало" : "Много" ;

//-------------------------------------------------------------------------

let message1;

if (login == 'Сотрудник') {
  message1 = 'Привет';
} else if (login == 'Директор') {
  message1 = 'Здравствуйте';
} else if (login == '') {
  message1 = 'Нет логина';
} else {
  message1 = '';
}

//--------->

let message = (login == "Сотрудник") ? "Привет" :
 (login == "Директор") ? "Здравствуйте" :
 (login == "") ?  "Нет логина" :
  "";