function perfectNumber(n){
    let sum = 0;
    for(let i = 1;i<n;i++){
         if(n % i === 0){
             sum += i;
         }
    }
    if(sum === n){
        let resultString = ' We have a perfect number!';
        return resultString;
    }else{
        let resultString = 'It\'s not so perfect.';
        return resultString;
    }
}
let result = perfectNumber(6);
console.log(result);