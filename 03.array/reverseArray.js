function reverseArray(n,arr){
    let array = [];
    for(let i=(n-1);i>=0;i--){
        array.push(arr[i]);
    }
    console.log(`${array.join(' ')}`);

}
reverseArray(3, [10, 20, 30, 40, 50]);