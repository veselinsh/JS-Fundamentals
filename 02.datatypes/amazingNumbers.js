function amazingNumbers(num){
    let numAsStr = num.toString();
    let sum = 0;
    let hasNine = false;
    for(let i = 0;i<numAsStr.length ; i++){
        sum += Number(numAsStr[i]);
    }
    let sumAsString = sum.toString();

    for(let i = 0;i<sumAsString.length;i++){
       if(sumAsString[i] == '9'){
          hasNine = true;
          break;
       }
    }
    
        console.log(`${num} Amazing? ${hasNine ? 'True'  : 'False'}`);
 
}
amazingNumbers(1233);