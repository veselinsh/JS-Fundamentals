function searchingNum(array,operations){
    let takenElements = operations.shift();
    let deletedElements = operations.shift();
    let searchedNum = operations.shift();
    let result = array.splice(0,takenElements);
    let finalResult = result.splice(0,deletedElements);
    let counter = 0;
    for(let num of result){
        if(searchedNum === num){
           counter++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
    

}
searchingNum([5, 2, 3, 4, 1, 6],[5, 2, 3]);        