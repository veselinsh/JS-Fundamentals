function shoppingComputer(input){
    let typeOfOrder = input.pop();
    let sum = 0;
    let result = 0
    if(input.length <= 1 ){
        console.log('Invalid order!');
        return;
    }
    for(let num of input){
        let tokens = Number(num);
        if(tokens < 0){
            console.log('Invalid price!');
            continue;
        }
        sum += tokens;
    }
    if(sum ===  0){
        console.log('Invalid order!');
    }
    let taxes = sum * 0.2;
    result = taxes + sum;
    if(typeOfOrder === 'special'){
        result *= 0.9;
    }else{
        result *= 1;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${result.toFixed(2)}$`);
    

}
shoppingComputer(['1050', '200', '450','2', '18.50', '16.86', 'special']);