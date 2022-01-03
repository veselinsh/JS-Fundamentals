function passwordValidator(password){
    function passwordLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        }else{
            return false;
        }
    }
    function consistence(pass){
        for(let char of pass){
            let numberOfChar = char.charCodeAt(0);
            if(!(numberOfChar >= 48 && numberOfChar <= 57)&&
               !(numberOfChar >= 65 && numberOfChar <= 90)&&
               !(numberOfChar >= 97 && numberOfChar <= 122) ){
               return false;
            }
        }
        return true;
    }
    function isConsist2Digits(pass){
        let count = 0;
        for(let char of pass){
            let numberOfChar = char.charCodeAt(0);
            if((numberOfChar >= 48 && numberOfChar <= 57)){
               count++;
            }
        }
        if(count >= 2){
            return true;
        }else{
            return false;
        }
    }
    let passwordLng = passwordLength(password);
    let content = consistence(password);
    let digits = isConsist2Digits(password);
    
    if(passwordLng && content && digits){
        console.log('Password is valid');
        return;;
    }
    if(!passwordLng){
        console.log('Password must be between 6 and 10 characters');
    }
    if(!content){
        console.log('Password must consist only of letters and digits');
    }
    if(!digits){
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('MyPass123');