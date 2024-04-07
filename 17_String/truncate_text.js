function truncate(str, MaxLength){

    if(str.length > MaxLength){
        return str.slice(0, MaxLength-1) + "...";
    }
    return str;
}



alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 10));