function movingTarget(input){
    let sequenceOfTargets = input.shift().split(' ').map(Number);
    for(let command of input){
        let currentCommand = command.split(' ');
        let index = Number(currentCommand[1]);
        if(currentCommand[0] === 'Shoot'){
            let power = Number(currentCommand[2]);
            for(let i = 0;i < sequenceOfTargets.length;i++){
                if(index === i){
                    sequenceOfTargets[i] -= power;
                    if(sequenceOfTargets[i] <= 0){
                        sequenceOfTargets.splice(i,1);
                    }
                }
            }
           
        }else if(currentCommand[0] === 'Add'){
            let isExist = true; 
            let value = Number(currentCommand[2]);
            for(let i = 0;i < sequenceOfTargets.length;i++){
                if(index === i){
                   sequenceOfTargets.splice(index,0,value);
                   isExist = false;
                }
            }
            if(isExist){
                console.log(`Invalid placement!`);
            }
          

        }else if(currentCommand[0] === 'Strike'){
            let raduis = Number(currentCommand[2]);
            if(index - raduis < 0 || index + raduis >= sequenceOfTargets.length){
                console.log('Strike missed!');
            }else{
                let begin = index - raduis;
                let end = index + raduis;
                sequenceOfTargets.splice(begin,end);
            }

        }else if(currentCommand[0] === 'End'){
            break;
        }
    }
    console.log(sequenceOfTargets.join('|'));

}
movingTarget(['52 74 23 44 96 110','Shoot 5 10','Shoot 1 80','Strike 2 1','Add 22 3','End']);//,