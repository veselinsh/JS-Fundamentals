function magicNumbers(arr,num){
    ;
    for(let i = 0;i<arr.length;i++){
        
        let currentNumber = arr[i];
        for(let j = i + 1;j<arr.length;j++){
            let result = 0;
            let nextNumber = arr[j];
            result += currentNumber + nextNumber
            if(result === num){
                console.log(`${currentNumber } ${nextNumber}`);
            }
        }
    }

}
magicNumbers([14, 20, 60, 13, 7, 19, 8], 27 )