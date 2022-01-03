function addSubstract(array){
    let oldSum = 0;
    let newSum = 0;
    for(let digit of array){
        oldSum += digit;
    }
    for(let i=0;i<array.length;i++){
        if(array[i] % 2 === 0){
            array[i] += i;
        }else{
            array[i] -= i;
        }
        newSum += array[i];
    }
    console.log(array);
    console.log(oldSum);
    console.log(newSum);

}
addSubstract([5, 15, 23, 56, 35])