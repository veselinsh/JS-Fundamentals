function averageNumbers(array){
    let numbers = array.split(' ').map(Number);
    let sum = 0;
    let result = [];
    let slicedArray = [];
    
    for(let digit of numbers){
       sum += digit;
    }
    let average = sum / numbers.length;
    let isSmaller = true;
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i] > average){
          result.push(numbers[i]);
          isSmaller = false;
        }
    }
    if(isSmaller){
     console.log('No');
    }
    result.sort((a,b) => b - a);
    if(result.length >= 5){
     for(let i = result.length;i>5;i--){
       result.pop();
     }
    }
     
    console.log(result.join(' '));

}
averageNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');