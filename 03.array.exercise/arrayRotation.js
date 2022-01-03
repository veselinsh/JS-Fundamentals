function arrayrotation(arr,n){
     
    for(let i = 0;i<n;i++){
        let temp = arr.shift();
        for(let j = 0;j<1;j++){
            arr.push(temp);
        }
    }
    console.log(arr.join(' '));
}
arrayrotation([51, 47, 32, 61, 21], 2)