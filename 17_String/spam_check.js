function checkSpam(str){

    let str_LowerCase = str.toLowerCase();

        return str_LowerCase.includes('viagra') || str_LowerCase.includes('xxx');
}



alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));