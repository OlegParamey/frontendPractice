function random(min,max){
    return min + Math.random() * (max-min);
     
}

function random_int(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}



alert (random(1, 100));
alert (random_int(1, 100));