function factorial(firstInteger,secondInteger){
    function firstFactorial(first){
        let result = 1;
        for(let i = first;i>0;i--){
            result *= i;
        }
        return result;
    }
    function secondFactorial(second){
        let result = 1;
        for(let i = second;i>0;i--){
            result *= i;
        }
        return result;
    }
    let result = (firstFactorial(firstInteger) / secondFactorial(secondInteger)).toFixed(2);
    return result; 

}
let result = factorial(5,2);
console.log(result);