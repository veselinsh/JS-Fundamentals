function counterStrike(list){
    let initialEnergy = Number(list.shift());
    let count = 0;
    let result = 0;
    let distance = list.shift();
    while(distance !== 'End of battle'){
        if(initialEnergy <= 0){
            break;
        }
        result = Number(distance);
        initialEnergy -= result;
        count++;
        if(count % 3 === 0){
            initialEnergy += 3;
        }
        distance = list.shift();
    }

    if(initialEnergy <= 0){
        initialEnergy = 0;
        console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`);
    }else{
        console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`);
    }

}
counterStrike(['200','54','14','28','13','End of battle']);