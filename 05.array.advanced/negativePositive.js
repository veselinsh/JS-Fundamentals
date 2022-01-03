function negativePositive(arr){
    let array = [];
    for(let i = 0;i<arr.length;i++){
        let current = arr[i];
        if(current >= 0){
          array.push(current);
        }else{
           array.unshift(current);
        }
        
    }
    console.log(array.join('\n'));

}
negativePositive([7, -2, 8, 9]);