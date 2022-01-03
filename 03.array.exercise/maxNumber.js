function maxNumber(arr){
    let topInteger = [];
    
    for(let i=0;i<arr.length;i++){
        let isTop = true;
       for(let j = i + 1;j<arr.length;j++){
           if(arr[j]>== arr[i]){
           isTop = false;
           break;
           }
       }
       if(isTop){
           topInteger.push(arr[i]);
       }
       
    }
    console.log(topInteger.join(' '));
   
}
maxNumber([41, 41, 34, 20]);
