function sort(input){
    let sortedArray = [];
    let length = input.length;
    for(let i = 0;i<length;i++){       
        if(i % 2 === 0){ 
            let biggest = Math.max(...input);
            sortedArray.push(biggest);
            let index = input.indexOf(biggest);
            input.splice(index,1);
        }else{ 
            let smallest = Math.min(...input);
            sortedArray.push(smallest);
            let index = input.indexOf(smallest);
            input.splice(index,1);
        }
    }
    console.log(sortedArray.join(' '));

}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);