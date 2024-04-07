function getLastDayOfMonth(year, month){
    let date_of_last_day = new Date(year, month + 1, 0);
    return date_of_last_day.getDate();
}

alert(getLastDayOfMonth(2012, 1));