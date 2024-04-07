function getSecondsToTomorrow(){
    let current_day = new Date();
    let tommorow = new Date(current_day.getFullYear(), current_day.getMonth(), current_day.getDate() + 1);
    return Math.round((tommorow - current_day)/1000);
}

alert(getSecondsToTomorrow());