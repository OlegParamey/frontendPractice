let SomeValue;
function ReadNumber(){
    
    do{
        SomeValue = prompt("Enter a number: ","");
    }
    while(!isFinite(SomeValue));

    if (SomeValue == null || SomeValue ==="") return null;

    return +SomeValue;
}

alert(`Число: ${ReadNumber()}`);