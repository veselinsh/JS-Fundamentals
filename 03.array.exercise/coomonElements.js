function commonElements(arr1,arr2){
    for(let i = 0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr2[j]===arr1[i]){
                console.log(arr2[j]);
            }
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])