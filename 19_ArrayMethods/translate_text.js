function camelize(str){
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}


alert(camelize("background-color"));    // == 'backgroundColor';
alert(camelize("list-style-image"));    // == 'listStyleImage';
alert(camelize("-webkit-transition"));  // == 'WebkitTransition';