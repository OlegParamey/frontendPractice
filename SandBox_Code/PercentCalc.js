const calc = (val, percent)=>{
    const valOfPers = (val/100*percent)
    return `${val-valOfPers} + ${val}%${percent}(это мы получаем ${valOfPers}) = ${val}`
}



console.log(calc(69645.72, 1.49))