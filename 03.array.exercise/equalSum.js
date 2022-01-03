function equalSum(arr){
    let isEqual = true;
    for(let i = 0;i<arr.length;i++){
        let rightSum = 0;
        let leftSum = 0;
        for(let leftInx = 0;leftInx < i;leftInx++){
            let currentNumber = arr[leftInx];
            leftSum += currentNumber;
        }
        for(let rightInx = i + 1;rightInx < arr.length;rightInx++){
            let currentNumber = arr[rightInx];
            rightSum += currentNumber;
        }
        if(leftSum === rightSum){
            console.log(i);
            isEqual = false;
        }
    }
    if(isEqual){
        console.log('no');
    }

}
equalSum([1, 2, 3, 3]);