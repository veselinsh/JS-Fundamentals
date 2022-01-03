function integerFloat(num1,num2,num3){
    let sum = Math.floor(num1 + num2 + num3) ;
    let result = num1 + num2 + num3;
    if(sum === result){
        console.log(`${result} - Integer`);
    }else{
        console.log(`${result} - Float`);
    }


}
integerFloat(9, 100, 1.1)