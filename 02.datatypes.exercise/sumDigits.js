function sumDigits(num){
     let numberAsString = num.toString();
     let sum = 0;
     for(let digits of numberAsString){
         sum += Number(digits);
     }
     console.log(sum);
}
sumDigits(245678);
