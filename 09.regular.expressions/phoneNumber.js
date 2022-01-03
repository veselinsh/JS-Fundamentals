function phoneNumber(numbers){
    let pattern = /\+[0-9]{3}[-\s][2]\1[0-9]{3}\2[0-9]{4}\b/g
    let num = [];
    let match = pattern.exec(numbers);
    while(match !==  null){
       num.push(match);
       match = pattern.exec(numbers);
    }
    console.log(num);
}
phoneNumber(    )