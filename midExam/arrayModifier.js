function arrayModifier(array){
    let modifierArray = array.shift().split(' ').map(Number);
    for(let i = 0;i<array.length - 1;i++){
        let currentCommand = array[i].split(' ');
        if(currentCommand[0] === 'swap'){
            let leftIndex = Number(currentCommand[1]);
            let rightIndex = Number(currentCommand[2]);
            let temp = modifierArray[leftIndex];
            modifierArray[leftIndex] = modifierArray[rightIndex];
            modifierArray[rightIndex] = temp;
        }else if(currentCommand[0] === 'multiply'){
            let leftIndex = Number(currentCommand[1]);
            let rightIndex = Number(currentCommand[2]);
            let result =  modifierArray[leftIndex] * modifierArray[rightIndex];
            modifierArray.splice(leftIndex,1);
            modifierArray.splice(leftIndex,0,result);
        }else if(currentCommand[0] === 'decrease'){
            for(let j = 0;j<modifierArray.length;j++){
                modifierArray[j] -= 1;
            }
        }
    }
      console.log(modifierArray.join(', '));
}
arrayModifier( ['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1','decrease','end']);