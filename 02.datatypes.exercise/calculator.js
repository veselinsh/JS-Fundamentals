function calculator(num1 , symbol , num2){
     let result = eval(`${num1} ${symbol} ${num2}`)
     console.log(result.toFixed(2));
}
calculator(5, '+', 10 )