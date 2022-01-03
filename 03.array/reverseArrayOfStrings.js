function arrayReverse(array){
    let k = array.length - 1
    for(let i = 0;i<(array.length - 1)/2;i++,k--){
        let temp = array[i];
        array[i]=array[k];
        array[k]=temp;
    }
    console.log(array.join(' '));

}
arrayReverse(['a', 'b', 'c', 'd', 'e']);
console.log("----");
arrayReverse(['abc', 'def', 'hig', 'klm', 'nop']);
console.log("----");
arrayReverse(['33', '123', '0', 'dd']);