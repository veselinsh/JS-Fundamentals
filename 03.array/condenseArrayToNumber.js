function condenseArrayToNumber(array) {
    
    while (array.length > 1) {
        let lastArray = [];
 
        for (let i = 0; i < array.length - 1; i++) {
            lastArray[i] = array[i] + array[i + 1];
        }
        array = lastArray;
    }
    console.log(array[0]);
}
condenseArrayToNumber([2,10,3]);