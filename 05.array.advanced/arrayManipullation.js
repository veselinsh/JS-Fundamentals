function arrayManipul(arrays){
    let manipullatedArray = arrays.shift().split(' ').map(Number);
    for(let i = 0;i < arrays.length;i++){
        let currentCommand = arrays[i].split(' ')
        if(currentCommand[0]==='Add'){
            manipullatedArray.push(Number(currentCommand[1]));
        }else if(currentCommand[0] ==='Remove'){
            let returnedIndex = manipullatedArray.indexOf(Number(currentCommand[1]));
              manipullatedArray.splice(returnedIndex,1);
        }else if(currentCommand[0]==='RemoveAt'){
            manipullatedArray.splice(Number(currentCommand[1]),1);
        }else if(currentCommand[0]==='Insert'){
            manipullatedArray.splice(Number(currentCommand[2]),0,Number(currentCommand[1]));
        }
    }
    console.log(manipullatedArray.join(' '));

}
arrayManipul(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);