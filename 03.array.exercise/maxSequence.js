function maxSequence(arr){
    let isLeft = true;
  
    let sequenceArray = [];
    for(let i = 0;i<arr.length;i++){
         let currentNumber = arr[i];
       for(let j = i + 1;j<arr.length;j++){
           let nextNumber = arr[j];
           if(currentNumber === nextNumber){
               sequenceArray.push(currentNumber);
           }else{
               break;
           }
       }
         
         
    }
         console.log(sequenceArray.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);