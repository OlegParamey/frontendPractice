function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkAge_1(age){
    return (age >= 18) ? true : confirm('А вам разрешили?');
}

function checkAge_2(age){
    return (age >= 18) || confirm('А вам разрешили?');
}