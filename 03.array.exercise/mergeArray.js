function mergeArray(arr1,arr2){
    let newArray=[];
    let temp = 0
    for(let i=0;i<arr1.length;i++){
        if(i % 2===0){
          temp = Number(arr1[i]) + Number(arr2[i]);
          newArray.push(temp);
        }else{
            newArray.push(arr1[i] + arr2[i]);
        }
        
    }
    console.log(newArray.join(' - '));
}
mergeArray(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])