function lastKNum(n,k){
    let result = [1];
    for(let i = 1;i < n;i++){
        let current = 0;
        let elements = result.slice(-k);
        for(let element of elements ){
            current += element;
        }
        result.push(current);
    }
    console.log(result.join(' '));
}
lastKNum(6, 3);